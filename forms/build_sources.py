"""Regenerate reviewable questions, data dictionary, and Apps Script from one schema."""
import json
from pathlib import Path
root=Path(__file__).resolve().parent
schema=json.loads((root/'questionnaire.json').read_text())
lines=['# '+schema['title'],'',schema['description'],'','Generated from `questionnaire.json`. Changes in GitHub do not automatically update the Google Form.','']
codebook=['# 数据字典 / Data dictionary','','字段名是供导出后的分析使用的稳定名称，不是 Google 内部问题 ID。表单的可见题目对应导出文件的列标题。','','| Field | Form question | Type | Required |','|---|---|---|---|']
for i,q in enumerate(schema['questions'],1):
 lines += [f"## {i}. {q['title']}",'',f"Field: `{q['id']}` · Type: {q['type']} · {'Required' if q['required'] else 'Optional'}",'']
 if q.get('helpText'):lines += [q['helpText'],'']
 for o in q.get('options',[]):lines += [f"- {o['label']}"]
 if q.get('allowOther'):lines += ['- Other (free text)']
 lines += ['']
 codebook += [f"| `{q['id']}` | {q['title']} | {q['type']} | {'Yes' if q['required'] else 'No'} |"]
codebook += ['','## Option codes','']
for q in schema['questions']:
 if not q.get('options'):continue
 codebook += ['### '+q['id'],'','| Code | Label |','|---|---|']
 codebook += [f"| `{o['code']}` | {o['label']} |" for o in q['options']]
 if q.get('allowOther'):codebook += ['| `other` | Keep the original free text in a separate `'+q['id']+'_other_text` field |']
 codebook += ['']
codebook += ['## 统计约定','','- 一份回答是一行；Timestamp 保留为提交时间。姓名和邮箱仅供项目联系，不放进对外汇总。','- 单选项用上方稳定代码；Other 的原文单独保留。不要把未填写、Not sure yet 和 Other 合并。','- 预计毕业年份与学期分开保存；2034 or later 是范围，不能当作准确的 2034 年。','- 多选题每个选项转成独立的 0/1 列，例如 research_interests__drug_delivery。百分比以回答人数为分母，总和可以超过 100%。','- 科研展望是可选文本，可后续人工归类为主题；不要自动推断能力、资格或录取结果。','- 先按学校、专业、学历、毕业年份统计人数，再统计研究兴趣和希望获得的训练。','- 已开始收集回答后，避免改题意或复用选项代码；较大修订应保留旧版本并建立新一轮问卷。','- 问卷回答保存在 Google Forms。未经处理的回答、姓名、邮箱不提交 GitHub。','']
(root/'questions.md').write_text('\n'.join(lines))
(root/'data-dictionary.md').write_text('\n'.join(codebook))
script='''/** Create a separate unpublished draft; never overwrite the existing form.
 * Paste into script.google.com and run createNexabioDraft.
 * Google Forms scope only. Creates no Sheet and sends no email.
 * Generated from questionnaire.json; run python3 forms/build_sources.py after edits.
 */
const QUESTIONNAIRE = '''+json.dumps(schema,indent=2)+''';
function createNexabioDraft() {
  const props = PropertiesService.getScriptProperties();
  const existingId = props.getProperty('NEXABIO_DRAFT_FORM_ID');
  if (existingId) {
    const existing = FormApp.openById(existingId);
    console.log('Existing draft: ' + existing.getEditUrl());
    return existing.getEditUrl();
  }
  const form = FormApp.create(QUESTIONNAIRE.title + ' - draft copy', false);
  props.setProperty('NEXABIO_DRAFT_FORM_ID', form.getId());
  form.setDescription(QUESTIONNAIRE.description).setCollectEmail(false)
    .setLimitOneResponsePerUser(false).setPublishingSummary(false)
    .setShuffleQuestions(false).setConfirmationMessage(QUESTIONNAIRE.confirmationMessage);
  for (const q of QUESTIONNAIRE.questions) {
    let item;
    const choices = (q.options || []).map(o => o.label);
    switch (q.type) {
      case 'short_answer':
        item = form.addTextItem();
        if (q.validation === 'email') item.setValidation(FormApp.createTextValidation().requireTextIsEmail().setHelpText('Please enter a valid email address.').build());
        break;
      case 'paragraph': item = form.addParagraphTextItem(); break;
      case 'multiple_choice': item = form.addMultipleChoiceItem().setChoiceValues(choices); if (q.allowOther) item.showOtherOption(true); break;
      case 'checkboxes': item = form.addCheckboxItem().setChoiceValues(choices); break;
      case 'dropdown': item = form.addListItem().setChoiceValues(choices); break;
      default: throw new Error('Unsupported type: ' + q.type);
    }
    item.setTitle(q.title).setRequired(q.required);
    if (q.helpText) item.setHelpText(q.helpText);
  }
  console.log('Draft edit URL: ' + form.getEditUrl());
  console.log('Responder URL (unpublished): ' + form.getPublishedUrl());
  return form.getEditUrl();
}
'''
(root/'create-form.gs').write_text(script)
print('Updated questions.md, data-dictionary.md, and create-form.gs')
