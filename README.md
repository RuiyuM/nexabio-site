# NEXABio website

## Website and content

- Website: https://ruiyum.github.io/nexabio-site/
- Main content: [`content/program.json`](content/program.json)
- Page sections and labels: [`app/page.tsx`](app/page.tsx)
- Appearance and responsive layout: [`app/globals.css`](app/globals.css)
- Content decisions and outstanding questions: [`docs/content-review.md`](docs/content-review.md)
- Editing guide: [`CONTRIBUTING.md`](CONTRIBUTING.md)
- Selected polymer-loop logo and usage: [`public/brand/README.md`](public/brand/README.md)
- Website images and original sources: [`public/images/README.md`](public/images/README.md)

The current website and poster focus on CyberTraining Workshops. The page includes an overview, workshop format, a proposed workshop timeline, ten workshop topics, participation information, project team, and learning resources. A live student interest form is connected; this is not a formal admission application. The contact email remains pending.


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
