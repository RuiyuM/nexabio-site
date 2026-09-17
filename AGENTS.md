# NEXABio website

- The user requests a simple draft website with NEXABio's own content, not a copy of the FAU program.
- Final hosting is GitHub Pages only, as explicitly requested. Do not provision or deploy another host.
- Keep unconfirmed recruitment details marked pending and retain the draft banner until instructed otherwise.
- Most editorial content lives in content/program.json. Fixed section labels live in app/page.tsx.
- Do not upload the original proposal, applicant records, or credentials.
- Run npm run build before publishing. It exports the site and checks GitHub Pages asset paths.
- GitHub Actions publishes the dist/client artifact on pushes to main. Assets must work under /nexabio-site/.
- The Vinext version skips prerendering the homepage with a production basePath. Preserve the documented assetPrefix plus output-normalization setup unless verified otherwise.
