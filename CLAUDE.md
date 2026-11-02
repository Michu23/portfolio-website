# Project notes

- Hosting: Netlify, connected to this GitHub repository. Pushing to the deploy branch is enough; Netlify builds (`npm run build`) and publishes `dist/` automatically. Do not set up GitHub Pages or GitHub Actions deployments.
- Deploy branch: the repository's default branch (currently `claude/build-portfolio-website-01GwoFDMGs64Q7evnGdVfyC9`; there is no `main`). Land changes there via pull request.
- Content lives in `src/data/profile.ts`. Resume PDF and portrait are in `public/`.
