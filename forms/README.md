# 学生意向问卷

- 学生填写：[NEXABio Student Interest Form](https://forms.gle/13iPUM7vkB7HX4tK8)
- 团队编辑：[Google Forms 编辑页](https://docs.google.com/forms/d/1STk8q-hYlNNbjq6fM24cGMfRgKbBkhAZB0OK68n2LHU/edit)
- 题目文字：[questions.md](questions.md)
- 结构化题库：[questionnaire.json](questionnaire.json)
- 字段与选项编码：[data-dictionary.md](data-dictionary.md)
- 当前链接与发布状态：[links.json](links.json)

当前共 12 题，预计 3-5 分钟。重点是学校、专业、学历、预计毕业年份和学期、研究兴趣、研究经历、期望收获。科研展望是选填长文本，其余必填。学校和专业提供可填写的 Other；邮箱有格式验证。

## 怎么一起编辑

1. 在 GitHub 修改 `questionnaire.json` 并提交 Pull Request；用 `python3 forms/build_sources.py` 同步题目文字、数据字典和草稿生成脚本。
2. 审核通过后，由拥有 Google 表单编辑权限的人同步修改在线问卷。GitHub 的合并不会自动改变已发布问卷。
3. 修改在线问卷后核对题目顺序、题型、选项、必填状态、邮箱验证和科研展望说明；在 `links.json` 更新核对日期。
4. 已有回答后，不要直接改变题意或复用选项编码。较大变化应建立新版本，并明确对应哪一批回答。

GitHub 仓库权限与 Google 表单权限独立。仓库管理员在 GitHub Settings → Collaborators 添加协作者；表单所有者在 Google Forms 的 Share 中按指定邮箱添加 Editor。当前只有所有者有表单编辑权。分享编辑链接本身不会授权，学生填写链接也不会提供编辑权。

## 已设置的在线行为

- 问卷已发布，任何拿到填写链接的人都可回答。
- 无需强制登录：未启用 Verified email 或 Limit to 1 response。邮箱通过独立的必填题收集。
- 不向填写者展示其他人的回答或统计汇总。
- 不随机排列题目、不设置测验、不显示再次提交链接。
- 提交说明明确这是意向登记，不代表录取或确认入组。
- 发布时没有发送通知；没有向任何协作者发送邀请。

2026-09-17 已通过 Chrome 扩展核对填写页的 12 题、必填项、Other 自由输入和科研展望说明，并核对编辑页的邮箱验证及发布权限；未提交测试回答。

## 统计方式

Google Forms 的 Responses 可直接查看各题分布，需要进一步分析时再下载 CSV；不必先建立 Google Sheet。参照数据字典，把单选题映射到稳定代码，多选题拆成每选项一个 0/1 列。预计毕业年份和学期各自成列。姓名、邮箱和原始回答保存在受控位置，不提交本仓库。

## 可重建的备用草稿

`create-form.gs` 从题库生成，可复制到 Google Apps Script 运行 `createNexabioDraft`，建立一个**独立、未发布**的草稿；不会覆盖在线问卷。`appsscript.json` 仅声明 Forms 权限。再次运行会返回同一草稿。修改题库不会自动同步已生成草稿。

此备用脚本经过本地语法和题库检查，没有在账户中执行；当前在线问卷是通过 Chrome 创建的。创建新问卷后需先核对再发布，再更新 `links.json`、`content/program.json` 和海报二维码。

接口参考：[Google FormApp](https://developers.google.com/apps-script/reference/forms/form-app)、[Google Form](https://developers.google.com/apps-script/reference/forms/form)。
