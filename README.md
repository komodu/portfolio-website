# Portfolio Website

A multi-page personal portfolio site for a software engineer, built with plain HTML5, Tailwind CSS (via CDN), and vanilla JavaScript. Currently branded for Wil Lorenz Dagli (backend development, DevOps, and observability).

## Features

- Three pages: **Home** (hero, about, tech stack, featured work, experience timeline, testimonials, contact CTA), **Work** (filterable project grid), and **Contact** (validated contact form with a simulated submission).
- A categorized **Tech Stack** section on Home (Languages, Frontend, Backend & Data, Cloud & Deployment, Version Control, Testing & QA) covering 23 technologies, from browser fundamentals through deployment and test automation.
- Light/dark theme toggle, persisted in `localStorage` and defaulting to the visitor's OS preference.
- Accessible mobile navigation menu (keyboard operable, closes on `Escape` or link click).
- Scroll-reveal animations via `IntersectionObserver`, fully disabled under `prefers-reduced-motion: reduce`.
- Client-side form validation with inline, `aria-describedby`-linked error messages and an `aria-live` status region for the async "submission" result.
- Project filtering on the Work page via plain `data-*` attributes and vanilla JS — no framework needed.
- Skip-to-content link and visible focus rings throughout for keyboard users.
- The project cards on Home and Work show **genuine screenshots of real sibling projects in this repo** (`patient-portal`, `component-library`, `admin-dashboard`, `expense-tracker`, `saas-landing-page`, `animation-showcase`) in `assets/images/projects/`, rather than gradient placeholders. The cards are static (no outbound links), so the site stays fully self-contained and works the same whether it's served alone or alongside the rest of the repo.
- Clicking any project card opens an accessible detail modal (focus-trapped, closes on `Escape`/backdrop click/✕, restores focus to the card on close) with a larger "browser window"–framed screenshot, an expanded description, and a short feature list — all pulled from one `PROJECTS` data object in `js/script.js`, so a card only needs `data-project="<key>"` to wire up.

## Folder structure

```
portfolio-website/
├── index.html
├── projects.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/images/
    └── projects/       (screenshots of sibling projects, shown as static images)
```

## Technologies used

- HTML5 (semantic landmarks, one `<h1>` per page)
- Tailwind CSS via CDN, with an inline `tailwind.config` per page defining the `paper` / `ink` / `accent` palette and `Fraunces` + `Inter` type pairing
- Vanilla JavaScript (ES6+, no build step) — theme toggle, mobile menu, scroll reveal, active-link highlighting, project filter, and form handling all live in the single shared `js/script.js`

## How to run locally

Just open `index.html` in a browser, or serve the folder for cleaner relative paths:

```
npx serve .
```

## Customization notes

- Swap the placeholder name, copy, and project cards in `index.html` / `projects.html` for your own.
- **Still marked as placeholders (search for `PLACEHOLDER` comments):** the three Experience timeline entries on Home use `[Company Name]` — fill in real employers/titles/dates; the Contact page's email (`you@example.com`), `[Your City]`, and `[Update availability]` need your real details. These were deliberately left as obvious placeholders rather than invented, since the site is now branded under a real name.
- The color system lives entirely in the `tailwind.config` block at the top of each page — change `paper`, `ink`, or `accent` there to re-theme the whole site.
- `js/script.js` is organized as small, independent IIFEs (theme, mobile menu, reveal, filter, project modal, form) — each checks for its own DOM hooks before running, so it's safe to reuse on new pages.
- To add a new project card anywhere, add an entry to the `PROJECTS` object at the top of `js/script.js` (title, image, description, features, tags) and give the card a matching `data-project="<key>"` attribute — the modal builds and populates itself from that one object.
- To refresh a project screenshot, retake it with a headless browser and overwrite the file in `assets/images/projects/`, e.g.:
  ```
  msedge --headless=new --disable-gpu --hide-scrollbars --force-prefers-reduced-motion --window-size=1280,900 --virtual-time-budget=3000 --screenshot="assets/images/projects/<name>.png" "file:///<repo-path>/<project>/index.html"
  ```
  `--force-prefers-reduced-motion` matters here: several of these projects animate stat counters via `requestAnimationFrame` on load, which can get stuck at 0 in headless mode without it.

## Future improvement ideas

- Wire the contact form to a real backend or a form service (Formspree, Netlify Forms) — it currently only simulates a network round-trip.
- Add a `/case-studies/` page per project with a longer write-up.
- Extract the shared header/footer markup into a tiny build-time include step if the page count grows further.
