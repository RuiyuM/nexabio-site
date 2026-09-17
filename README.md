# NEXABio website draft

A simple English website for the NEXABio CyberTraining pilot at The University of Texas at Dallas. Content is adapted from the project team's NSF_CyberTraining.pdf. The FAU site was used only as an information-structure reference.

**Status:** Draft for review. Recruitment details and formal funding acknowledgment need confirmation. This repository contains website materials, not the original proposal or applicant data.

## Website and content

- GitHub Pages address after deployment: https://ruiyum.github.io/nexabio-site/
- Main content: [`content/program.json`](content/program.json)
- Page sections and labels: [`app/page.tsx`](app/page.tsx)
- Appearance and responsive layout: [`app/globals.css`](app/globals.css)
- Content decisions and outstanding questions: [`docs/content-review.md`](docs/content-review.md)
- Editing guide: [`CONTRIBUTING.md`](CONTRIBUTING.md)

The page includes an overview, training activities, a proposed timeline, ten workshop topics, participation information, project team, and learning resources. The application link and contact email are deliberately empty until real details are supplied. No live form, survey collection, poster, or QR code has been created in this phase.

## 本次草稿的维护方式

多数文字集中在 `content/program.json`，参与者可以在 GitHub 网页中编辑。菜单与固定提示文字在 `app/page.tsx`。建议提交修改请求（Pull Request），由项目负责人检查后合并。

合并到 `main` 后，GitHub Actions 会重新生成静态网站并更新 GitHub Pages。仅保存到其他分支不会更新线上页面。网站即使写着 Draft，在 GitHub Pages 发布后也可以被知道网址的人访问；请只提交可以公开的网页内容。

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

The site is hosted only through GitHub Pages. The build creates a static artifact and normalizes its paths for GitHub's repository subdirectory.

## Before official recruitment

Confirm the dates, cohort size, eligibility, fees/support, contact email, form URL, and funding acknowledgment. Then review the draft banner and indexing settings. `noindex` is a search-engine request, not access control.

The team should choose a license before broadly distributing curriculum or code. No project license has been inferred from the proposal.
