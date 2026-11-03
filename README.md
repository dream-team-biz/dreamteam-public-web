# dreamteam-public-web

The source of www.dream-team.biz, served by GitHub Pages from the `main` branch.

- www.dream-team.biz forwards to https://dream-team-lab.com/, the site of Dream Team Lab: `index.html` and `thanks.html` send each visitor there.
- `/lab/` is staging for dream-team-lab.com: its pages are marked `noindex`, and no page outside `/lab/` links to its pages.

A publishing tool writes `index.html`, `thanks.html`, this README and `/lab/`, and overwrites any hand edit to them.
