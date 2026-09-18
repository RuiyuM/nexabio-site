# 如何共同编辑 / Editing the website

## 先获得访问权限

仓库和网站均公开，任何人都可以查看。仓库管理员在 Settings → Collaborators 中邀请需要直接编辑的参与者。参与者需要接受邀请。分享仓库链接本身不会授予编辑权限；也可以通过 Fork 和 Pull Request 提交建议。

## 修改文字

1. 打开 `content/program.json`，点击编辑。
2. 修改相应的文字，保留字段名、引号和逗号。无需修改网页布局。
3. 选择创建新分支并提交 Pull Request，简要说明修改内容。
4. 项目负责人审核并合并到 `main`。GitHub Pages 部署成功后，修改会更新公开网站。

对固定标题、菜单或提示的修改位于 `app/page.tsx`。页面颜色、间距和手机布局位于 `app/globals.css`。

## 常见更新

- 日期、名额、资助：修改 `application.details`。
- Google 表单填写链接：同时修改 `forms/links.json` 的 `responderUrl` 和 `application.formUrl`；不要填编辑链接。换问卷时也要更新海报二维码和短链接。
- 项目邮箱：修改 `contactEmail`；留空时不会生成虚构的邮箱链接。
- 课程：修改 `curriculum`。
- 团队：修改 `team`。
- 日程：修改 `timeline`，确认后再移除相应的 proposed 标记。

发布前检查网站上的 Draft 提示、资助确认说明和资源状态是否仍准确。若仓库可见性改变，同步修改 Resources 区域的访问说明。

## 问卷与海报协作

题目修改见 [forms/README.md](forms/README.md)，字段含义见 [数据字典](forms/data-dictionary.md)。GitHub 修改不会自动更新 Google Forms，在线编辑权限须由表单所有者单独授予。

海报见 [poster/README.md](poster/README.md)。PPTX 可直接编辑，每次同时提交更新的 PDF；为避免合并冲突，一次由一人负责修改 PPTX。网页下载使用这两个最终文件。

## 内容范围

请只上传可以公开的项目网站与教学材料。报名数据、付款资料、未获同意的个人资料、访问令牌和原始内部提案不属于本仓库内容。

请不要把 FAU 的讲师、资助编号、申请日期或招生条件复制进本项目。未经确认的 NEXABio 信息保留待确认标记。
