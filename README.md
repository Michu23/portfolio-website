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

## Content

All personal details, projects, experience, metrics and skills live in `src/data/profile.ts`. Edit that file to update the site; the components read from it.

## Assets

- `public/Miras_Mujeeb_Resume.pdf` is served by every "Download CV" and "Resume" link. Replace it to update the CV.
- `public/portrait.webp` is the hero portrait: a cut-out photo with a transparent background, head and shoulders, about 1200px wide. Replace it with another cut-out to change the photo; if the file is missing, the hero renders without a portrait.

## Sections

1. Hero: name, role, summary, three headline stats, CV download.
2. Selected work: filterable project list with links, plus the teams and products worked with.
3. Impact: production metrics from ClashCWL, Azolute AI and Dview.
4. About: education, skills, delivery process and a signature quote panel.
5. Journey: expandable experience rows and milestones.
6. Contact: links, a flagship card and a project brief form that opens a prefilled email.

## Motion, sound and loading

- Motion is on by default: reveal animations, hero and section parallax, and the accordion transitions. The "Motion" toggle in the header switches it off and the choice is remembered in the browser.
- Background music is on by default and starts on the visitor's first click, tap, key press or scroll (browsers block audio before a gesture). The "Sound" toggle switches it off. By default the soundtrack is a generative ambient synth built with the Web Audio API, so no audio file ships. To use a real track, drop a looping file in `public/` and set `musicUrl` in `src/data/profile.ts`.
- A full-screen loader with a counter and progress line shows on first paint until fonts and assets are ready, then lifts to reveal the hero.
