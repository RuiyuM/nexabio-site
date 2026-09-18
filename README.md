# NEXABio website draft

A simple English website for the NEXABio CyberTraining pilot at The University of Texas at Dallas. Content is adapted from the project team's NSF_CyberTraining.pdf. The FAU site was used only as an information-structure reference.

**Status:** Draft for review. Recruitment details and formal funding acknowledgment need confirmation. This repository contains website materials, not the original proposal or applicant data.

## Website and content

- Website: https://ruiyum.github.io/nexabio-site/
- Main content: [`content/program.json`](content/program.json)
- Page sections and labels: [`app/page.tsx`](app/page.tsx)
- Appearance and responsive layout: [`app/globals.css`](app/globals.css)
- Content decisions and outstanding questions: [`docs/content-review.md`](docs/content-review.md)
- Editing guide: [`CONTRIBUTING.md`](CONTRIBUTING.md)
- Selected polymer-loop logo and usage: [`public/brand/README.md`](public/brand/README.md)

The page includes an overview, training activities, a proposed timeline, ten workshop topics, participation information, project team, and learning resources. A live student interest form is connected; this is not a formal admission application. The contact email remains pending.

## 问卷与海报

- [填写学生意向问卷](https://forms.gle/13iPUM7vkB7HX4tK8)：学校、专业、预计毕业时间、科研兴趣和展望等，共 12 题。
- [问卷协作说明](forms/README.md)、[题目](forms/questions.md)、[数据字典](forms/data-dictionary.md)。
- [可编辑海报 PPTX](poster/NEXABio-student-interest.pptx)、[打印版 PDF](poster/NEXABio-student-interest.pdf)、[海报编辑说明](poster/README.md)。

问卷题库和海报文件在 GitHub 维护；在线填写与回答保存在 Google Forms。两边编辑权限分别授予。GitHub 题库修改不会自动更新在线问卷。

## 本次草稿的维护方式

多数文字集中在 `content/program.json`，参与者可以在 GitHub 网页中编辑。菜单与固定提示文字在 `app/page.tsx`。建议提交修改请求（Pull Request），由项目负责人检查后合并。

合并到 `main` 后，GitHub Actions 会重新生成静态网站并发布到 GitHub Pages。仅保存到其他分支不会更新线上页面。网站与仓库均公开；请只提交可以公开的网页内容。

## Run locally

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

Open the Local URL printed by the development server; the site uses the `/nexabio-site/` path.

```sh
npm run build
```

The deployable website is generated in `dist/client/`. GitHub Pages serves only that static directory; no server, database, or credential is required at runtime. If the repository is renamed, update `next.config.ts`, `scripts/prepare-pages.mjs`, and the favicon URL in `app/layout.tsx` together. The build checks that the exported home page, local assets, and section links exist.

## Publishing

In repository Settings → Pages, select GitHub Actions. The workflow in `.github/workflows/pages.yml` builds and publishes pushes to `main`, and can also be run manually from Actions. A failed build does not replace the current website. There is no automatic publication to another hosting provider.

Hosting is GitHub Pages only. The build creates a static artifact and normalizes its paths for GitHub's repository subdirectory. The owner approved making this repository public and enabling Pages. Anyone can view the source and project materials; direct editing still requires collaborator access. Google Form editor access is managed separately.

## Before official recruitment

Confirm the dates, cohort size, eligibility, fees/support, contact email, and funding acknowledgment. The current form collects expressions of interest only. Then review the draft banner and indexing settings. `noindex` is a search-engine request, not access control.

The team should choose a license before broadly distributing curriculum or code. No project license has been inferred from the proposal.
