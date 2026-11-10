# Publishing and automatic updates

Public portfolio: https://jasonwu5isme.github.io/PersonalPortfolio/

Together Pass prototype: https://jasonwu5isme.github.io/PersonalPortfolio/togetherpass/

Together Pass project introduction: https://jasonwu5isme.github.io/PersonalPortfolio/togetherpass/about.html

## One-time setup

In this repository's Settings → Pages, choose **GitHub Actions** as the source.
The deployment workflow publishes the generated `dist` directory.

## Updates

- Push to `PersonalPortfolio/main`: automatically type-check, build and deploy.
- Update `TogetherPass/main`: the portfolio's hourly scheduled workflow fetches its latest public prototype and redeploys. Schedules can be delayed by GitHub.
- For an immediate prototype refresh without changing the portfolio, run **Deploy portfolio and sync Together Pass** from the Actions tab using **Run workflow**.
- `public/togetherpass` contains an initial source snapshot for local previews. Each deployment replaces it with the current TogetherPass HTML, CSS and JavaScript. Edit the standalone TogetherPass repository for prototype changes.
- The portfolio case-study summary lives in `src/data/portfolioData.ts` and is edited separately; prototype synchronization does not rewrite project claims, contribution or budgets.
- `togetherpass/source.json` on the published site records the exact source commit deployed.

The synchronization uses public repository checkout and the standard repository-scoped GitHub Actions token. No personal access token is required. If TogetherPass introduces additional assets, update the explicit copy list in `scripts/sync-togetherpass.mjs`.

## Local preview

Use Node.js 22 or newer, then run `npm ci` and `npm run dev`.
`npm run lint` checks TypeScript and `npm run build` creates the production site.
Relative asset URLs allow the portfolio to work under the GitHub Pages repository path.
