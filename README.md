# Aryan Jindal — portfolio

React + Vite + Tailwind + Framer Motion, hosted on Firebase Hosting (free Spark plan).

## Run locally

```bash
npm install
npm run dev          # http://localhost:5173
```

## Edit content

Everything you see on the site lives in **`src/data/content.js`** — experience, projects, skills, achievements, hero copy.

- Each item has a `lenses` list (`'fde'`, `'backend'`, `'genai'`). It decides what lights up when a visitor picks
  "What are you hiring for?". Untagged items show for everyone.
- Wrap words in `**double asterisks**` to give them the highlighter mark.
- When a GenAI project is ready, change its `status` from `'building'` to `'live'` and add links, e.g.
  `links: [{ label: 'View code', href: 'https://github.com/AryanJindal/...' }]`.

### Tailored links for recruiters

Each view has its own URL, so you can send the right one:

- `https://YOUR-SITE.web.app/?for=fde`
- `https://YOUR-SITE.web.app/?for=backend`
- `https://YOUR-SITE.web.app/?for=genai`

### Resume downloads

Compile your `.tex` resumes to PDF, put them in `public/resumes/`, and set the paths in `PROFILE.resumes`
(e.g. `genai: '/resumes/aryan-jindal-genai.pdf'`). A "Download resume" button appears for each view that has one.

## Deploy to Firebase

One-time setup:

```bash
npm install -g firebase-tools
firebase login
```

Create a project at https://console.firebase.google.com, then put its project ID in `.firebaserc`
(or run `firebase use --add`). `firebase.json` is already configured to serve `dist/`.

Every deploy after that:

```bash
npm run deploy       # builds, then runs firebase deploy --only hosting
```
