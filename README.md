# dreamteam-public-web

Static HTML website for **dream-team.biz**, hosted on GitHub Pages. Created by Boris 2026-07-09.

## Pages

- `index.html` — landing page: DreamTeam, AI agent team platform centered around a human driver/overseer. Coming soon to enterprises worldwide.
- `thanks.html` — post-signup confirmation page.

## Third-party integrations

| Feature | Provider | Notes |
|---|---|---|
| Visitor comments | [giscus](https://giscus.app) | Backed by this repo's GitHub Discussions (category: General). **One-time setup required:** install the giscus GitHub App on this repo at https://github.com/apps/giscus — comments widget shows an error until installed. Discussions are already enabled. |
| Launch-notification signups | [FormSubmit](https://formsubmit.co) | Form posts to boris@daich.biz. **First submission triggers an activation email to that address — click the confirmation link once**, after that all signups arrive by email. |

## Deployment

GitHub Pages serves from the `main` branch root (`.nojekyll` present, no build step). Live at:
https://dream-team-biz.github.io/dreamteam-public-web/
