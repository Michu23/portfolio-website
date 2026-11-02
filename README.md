# Miras Mujeeb · Portfolio

Personal portfolio for Miras Mujeeb, Forward Deployed Software Engineer and co-founder of Azolute AI.

Built with React 19, TypeScript, Vite and Framer Motion. Dark, cinematic layout: Anton display type, Manrope body text, Caveat handwriting, red accent on near-black, hairline dividers and numbered sections.

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build
```

```bash
npm run lint
```

## Deploy

Hosted on Netlify, connected to this repository. Pushing to the deploy branch triggers a build (`npm run build`) and publishes `dist/`. No other deployment setup is needed.

## Content

All personal details, projects, experience, metrics and skills live in `src/data/profile.ts`. Edit that file to update the site; the components read from it.

## Assets

- `public/Miras_Mujeeb_Resume.pdf` is served by every "Download CV" and "Resume" link. Replace it to update the CV.
- `public/og.png` is the 1200x630 link-preview banner used by Open Graph and Twitter cards. Replace it with another image of the same size and name to change the preview.
- `public/portrait.webp` is the hero portrait: a cut-out photo with a transparent background, head and shoulders, about 1200px wide. Replace it with another cut-out to change the photo; if the file is missing, the hero renders without a portrait.

## Sections

1. Hero: name, role, summary, three headline stats, CV download.
2. Selected work: filterable project list with links, plus the teams and products worked with.
3. Impact: production metrics from ClashCWL, Azolute AI and Dview.
4. About: education, skills, delivery process and a signature quote panel.
5. Journey: expandable experience rows and milestones.
6. Contact: links, a flagship card and a project brief form that opens a prefilled email.

## Motion, sound and loading

- Motion is always on: reveal animations, hero and section parallax, and the accordion transitions.
- Background music is off by default. The "Sound" toggle in the header switches it on, and the choice is remembered. Once on, it starts on the visitor's next click, tap, key press or scroll (browsers block audio before a gesture).
- To use your own track, put a looping MP3 at `public/music.mp3`. Nothing else to change. If that file is missing, a generative ambient synth built with the Web Audio API plays instead. To use a different file name, update `musicUrl` in `src/data/profile.ts`.
- A full-screen loader with a counter and progress line shows on first paint until fonts and assets are ready, then lifts to reveal the hero.
