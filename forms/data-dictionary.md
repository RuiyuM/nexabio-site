# 数据字典 / Data dictionary

字段名是供导出后的分析使用的稳定名称，不是 Google 内部问题 ID。表单的可见题目对应导出文件的列标题。

| Field | Form question | Type | Required |
|---|---|---|---|
| `full_name` | Full name | short_answer | Yes |
| `email` | Email address | short_answer | Yes |
| `institution` | Institution or university | multiple_choice | Yes |
| `major` | Major or field of study | multiple_choice | Yes |
| `degree_level` | Current degree level | multiple_choice | Yes |
| `graduation_year` | Expected graduation year | dropdown | Yes |
| `graduation_term` | Expected graduation term | multiple_choice | Yes |
| `research_interests` | Which research areas interest you? | checkboxes | Yes |
| `research_experience` | Prior research experience | multiple_choice | Yes |
| `expected_gains` | What do you hope to gain from NEXABio? | checkboxes | Yes |
| `research_outlook` | Your research outlook | paragraph | No |
| `email_updates` | Would you like email updates about NEXABio? | multiple_choice | Yes |

## Option codes

### institution

| Code | Label |
|---|---|
| `ut_dallas` | The University of Texas at Dallas |
| `unt_dallas` | University of North Texas at Dallas |
| `dallas_college` | Dallas College |
| `paul_quinn` | Paul Quinn College |
| `other` | Keep the original free text in a separate `institution_other_text` field |

### major

| Code | Label |
|---|---|
| `computer_science` | Computer Science |
| `bioengineering` | Bioengineering / Biomedical Engineering |
| `materials_science` | Materials Science / Materials Engineering |
| `chemistry` | Chemistry / Polymer Science |
| `chemical_engineering` | Chemical Engineering |
| `data_science` | Data Science / Statistics |
| `other` | Keep the original free text in a separate `major_other_text` field |

### degree_level

| Code | Label |
|---|---|
| `undergraduate` | Undergraduate |
| `masters` | Master's student |
| `doctoral` | Doctoral student |
| `other` | Other |

### graduation_year

| Code | Label |
|---|---|
| `2026` | 2026 |
| `2027` | 2027 |
| `2028` | 2028 |
| `2029` | 2029 |
| `2030` | 2030 |
| `2031` | 2031 |
| `2032` | 2032 |
| `2033` | 2033 |
| `2034_plus` | 2034 or later |
| `unsure` | Not sure yet |

### graduation_term

| Code | Label |
|---|---|
| `spring` | Spring |
| `summer` | Summer |
| `fall` | Fall |
| `winter` | Winter |
| `unsure` | Not sure yet |

### research_interests

| Code | Label |
|---|---|
| `ai_biomaterials` | AI / machine learning for biomaterials |
| `drug_delivery` | Drug and gene delivery |
| `polymer_design` | Polymer and materials design |
| `tissue_engineering` | Tissue engineering / regenerative medicine |
| `scientific_computing` | Scientific computing / high-performance computing |
| `exploring` | Still exploring my interests |

### research_experience

| Code | Label |
|---|---|
| `none` | No prior research experience |
| `coursework` | Course-based research only |
| `less_than_1_year` | Research outside coursework - less than 1 year |
| `at_least_1_year` | Research outside coursework - 1 year or more |

### expected_gains

| Code | Label |
|---|---|
| `foundations` | Learn AI and biomaterials fundamentals |
| `computing_skills` | Build programming and data-analysis skills |
| `project_experience` | Gain hands-on research project experience |
| `research_direction` | Identify a research direction |
| `graduate_study` | Prepare for graduate study |
| `research_careers` | Explore research-related careers |

### email_updates

| Code | Label |
|---|---|
| `yes` | Yes |
| `no` | No |

## 统计约定

- 一份回答是一行；Timestamp 保留为提交时间。姓名和邮箱仅供项目联系，不放进对外汇总。
- 单选项用上方稳定代码；Other 的原文单独保留。不要把未填写、Not sure yet 和 Other 合并。
- 预计毕业年份与学期分开保存；2034 or later 是范围，不能当作准确的 2034 年。
- 多选题每个选项转成独立的 0/1 列，例如 research_interests__drug_delivery。百分比以回答人数为分母，总和可以超过 100%。
- 科研展望是可选文本，可后续人工归类为主题；不要自动推断能力、资格或录取结果。
- 先按学校、专业、学历、毕业年份统计人数，再统计研究兴趣和希望获得的训练。
- 已开始收集回答后，避免改题意或复用选项代码；较大修订应保留旧版本并建立新一轮问卷。
- 问卷回答保存在 Google Forms。未经处理的回答、姓名、邮箱不提交 GitHub。
