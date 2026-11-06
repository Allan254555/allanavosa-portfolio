# Allan Avosa: Portfolio (React + Vite)

Personal portfolio for Allan Avosa, Software Systems Engineer. Built with React 18 and Vite.

## Quick start

Requires Node.js 18 or newer.

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Structure

The site is a multi-page build: each page is a real HTML file, so `/projects/` etc. work on any static host.

| URL | HTML file | Entry | Sections |
|---|---|---|---|
| `/` | `index.html` | `src/entries/home.jsx` | Hero, About, What I Build, Education, Contact |
| `/projects/` | `projects/index.html` | `src/entries/projects.jsx` | Projects |
| `/experience/` | `experience/index.html` | `src/entries/experience.jsx` | Experience, Skills |
| `/system-design/` | `system-design/index.html` | `src/entries/system-design.jsx` | System Design |
| `/writing/` | `writing/index.html` | `src/entries/writing.jsx` | Writing |

```
src/
├── mount.jsx            # Wraps a page in the shared Header and Footer
├── entries/             # One file per page: lists that page's sections
├── data/portfolio.js    # ALL text content and the nav links
├── components/          # One component per section, plus Header, Footer, ui.jsx
├── styles/global.css    # Color tokens (top of file) and all styles
└── assets/images/
```

Each page's HTML file holds only its title and description. Tags shared by every page (favicons, fonts) are added by `vite.config.js`.

## Common edits

All content is in `src/data/portfolio.js`. You rarely need to touch the components.

- **Email, LinkedIn, resume:** fill in `email`, `linkedin`, `linkedinLabel` and `resume` in `profile`. Empty values stay hidden; once filled, they appear in the Contact section (and a Resume button appears in the hero).
- **Publish an article:** set its `url` in `articles`. The "Planned" tag turns into a "Read" link.
- **Add a job:** add an object to `experience`.
- **Add a skill row:** add `['Area', 'Tools…']` to `skills`.
- **Colours and fonts:** change the variables at the top of `src/styles/global.css` (`--bg`, `--accent`, `--display`, …).
- **Add a section to a page:** create a component in `src/components/` and add it to that page's file in `src/entries/`.
- **Add a new page:** copy one of the page folders (e.g. `writing/index.html`), point its script at a new file in `src/entries/`, add it to `pages` in `vite.config.js`, and add `{ href, label, page }` to `navLinks`.

## Deploy

**Vercel or Netlify (easiest):** import the GitHub repo. Build command `npm run build`, output directory `dist`.

**GitHub Pages:**

```bash
npm run build
npx gh-pages -d dist
```

Then in the repo: Settings → Pages → source `gh-pages` branch. `vite.config.js` uses `base: '/'`, which assumes the site is served from the root of a domain (the planned custom domain).
