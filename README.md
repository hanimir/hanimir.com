# hanimir.com

Minimal React + TypeScript resume site, hosted on GitHub Pages and protected by Cloudflare Access (email OTP / magic link).

## How this site is served

Request flow:

1. Browser requests `https://hanimir.com`.
2. DNS for `hanimir.com` is managed by Cloudflare.
3. Cloudflare proxy receives the request and enforces Cloudflare Access policy first.
4. If access is granted, Cloudflare forwards to GitHub Pages origin.
5. GitHub Pages serves the static build artifact generated from this repo.

Important:

- `https://hanimir.github.io/hanimir.com/` is the default project Pages URL.
- `https://hanimir.com` works only when GitHub Pages custom domain is configured and DNS points to GitHub Pages.

## Hosting and protection stack

- Domain registrar: Google Domains / Squarespace (registration only).
- DNS + edge proxy + auth gate: Cloudflare.
- Static hosting: GitHub Pages.
- App framework/build tool: React + Vite.

## Cloudflare protection model

Protection is at Cloudflare (not GitHub Pages):

- Cloudflare Access app is configured for `hanimir.com`.
- Login method is One-time PIN (email magic link / OTP).
- Allow policy should include only approved email(s), e.g. `hmir95@gmail.com`.
- Everyone else is denied by default.

Recommended Cloudflare settings:

1. DNS record for root domain:
   - Type: `CNAME`
   - Name: `@`
   - Target: `hanimir.github.io`
   - Proxy status: `Proxied` (orange cloud)
2. Optional `www` record:
   - Type: `CNAME`
   - Name: `www`
   - Target: `@` (or `hanimir.github.io`)
   - Proxy status: `Proxied`
3. Zero Trust -> Access -> Applications:
   - App type: Self-hosted
   - Domain: `hanimir.com` (and `www.hanimir.com` if used)
   - Policy: Allow only approved email(s)
   - Login method: One-time PIN

## GitHub Pages configuration

Repo settings that must be set:

1. Settings -> Pages -> Source: `GitHub Actions`.
2. Settings -> Pages -> Custom domain: `hanimir.com`.
3. Enable HTTPS when available.

Deployment workflow file:

- `.github/workflows/deploy-pages.yml`

Deploy trigger:

- Every push to `main`.
- Manual run via Actions UI is also supported.

## Local development (testing)

Prerequisite:

- Node `20.19+` or `22.12+` (Vite 7 requirement). Node 18 will fail.

Commands:

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build and preview

```bash
npm run build
npm run preview
```

- `npm run build` outputs static files to `dist/`.
- `npm run preview` serves the built artifact locally for validation.

## App structure and extending pages

- Routes: `src/App.tsx`
- Current resume page: `src/pages/ResumePage.tsx`
- Shared styles: `src/styles.css`

Routing notes:

- Uses `HashRouter` for reliable multi-page navigation on GitHub Pages.
- Add new pages by creating a component in `src/pages` and adding a route in `src/App.tsx`.

## Troubleshooting

- `hanimir.com` shows 404, but GitHub URL works:
  - Confirm GitHub Pages custom domain is set.
  - Confirm DNS record points to `hanimir.github.io`.
  - Confirm Cloudflare nameservers are active at registrar.
  - Wait for DNS/SSL propagation.
- GitHub Actions deploy succeeds, but content looks old:
  - Hard refresh browser cache.
  - Verify latest workflow run succeeded in GitHub Actions.
- Local dev fails with Vite engine errors:
  - Upgrade Node to `20.19+` or `22.12+`.
