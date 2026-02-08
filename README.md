# hanimir.com

Basic React resume site deployed to GitHub Pages.

## Local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Multi-page structure

The app uses `react-router-dom` with a `HashRouter` so route expansion works on GitHub Pages.

- App routes: `src/App.tsx`
- First page: `src/pages/ResumePage.tsx`
- Shared styles: `src/styles.css`

To add a page:

1. Create a component in `src/pages`.
2. Add a `<Route />` in `src/App.tsx`.

## Deployment

GitHub Actions workflow: `.github/workflows/deploy-pages.yml`.

Required GitHub settings:

1. Repo Settings -> Pages -> Source: `GitHub Actions`.
2. Push to `main` to deploy.

## Access protection with Cloudflare email OTP / magic link

GitHub Pages cannot enforce email OTP on its own. Do this at Cloudflare:

1. Put your site behind Cloudflare proxy (`orange cloud`) on your custom domain CNAME to GitHub Pages.
2. In Cloudflare Zero Trust, create an **Access application** for your site hostname.
3. Set Login method to **One-time PIN** (email magic link/OTP flow).
4. Add an **Allow policy** only for specific emails (or your approved email domain) and keep default deny for everyone else.
5. Optional hardening: add a second factor rule and short session duration.

Once Access is enabled, only allowed identities can reach the GitHub Pages content.
