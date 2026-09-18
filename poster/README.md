# 可编辑学生招募海报

- [PowerPoint 可编辑版](NEXABio-student-interest.pptx)
- [PDF 打印版](NEXABio-student-interest.pdf)
- [PNG 预览](NEXABio-student-interest.png)
- [海报文案](content.json)
- [二维码 PNG](qr-code.png) / [SVG](qr-code.svg)

一页 US Letter 竖版（8.5 × 11 英寸），沿用网站的深绿、橙色与白色。正文和色块是 PowerPoint 原生对象；B 款分子链环 logo 与二维码是独立图片，可以替换。Logo 原图及使用说明见 [public/brand](../public/brand/README.md)。当前是学生意向登记草稿，未承诺名额、资助、录取或最终日期。

## 最容易的协作方式

下载 PPTX，用 PowerPoint 修改文字、颜色、位置；也可以上传到 Google Slides 协同编辑，导出后检查字体、换行和二维码。完成后把更新的 PPTX 和导出的 PDF 一起提交 GitHub。建议每次由一人修改 PPTX，避免二进制文件合并冲突。可以先在 `content.json` 或 Issue 中讨论文案。

PPTX 手工修改后请同步 `content.json`。图片预览也应从最终 PDF 重新导出。PDF 和 PPTX 的学生填写链接应保持一致；不要使用表单编辑链接。

## 维护二维码

填写链接存放在 `../forms/links.json`。使用 Python `qrcode[pil]` 运行 `python3 poster/generate-qr.py` 可更新 PNG/SVG。换表单时必须在 PPTX 中替换二维码图片、更新可点击的短链接，并重新导出 PDF。只改题目、保留同一个 Google Form 时无需更换二维码。

## 可选：由文案重新生成

`build-poster.mjs` 使用 `@oai/artifact-tool` 创建可编辑草稿，读取 `content.json`、`forms/links.json`、`qr-code.png` 和 `public/brand/nexabio-logo-dark-v1.png`。需在可用的 Artifact Tool 环境执行 `node poster/build-poster.mjs`；若包在其他目录，用 `ARTIFACT_NODE_MODULES` 指定对应 `node_modules`。草稿写入 `.poster-build/`，不会覆盖已审核的 PPTX。

普通协作者不需要这个构建环境，直接编辑 PPTX 即可。重新生成会采用 JSON 文案与脚本中的布局，不包含只在 PPTX 中进行的手工调整。

正式提交前逐页查看导出的 PDF，确认没有截断或重叠，并用手机扫描二维码检查目的地址。网站在本地启动和构建时，会把 `poster/` 中的最终 PDF/PPTX 复制为下载文件。
