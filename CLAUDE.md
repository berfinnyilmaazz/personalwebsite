# CLAUDE.md — Berfin Yılmaz Personal Website

Single-page, bilingual (EN / TR) CV website for Berfin Yılmaz (Fullstack Developer).
This file overrides the parent `D:\berfin\CLAUDE.md`, which belongs to an unrelated case-study project.

## Stack & commands

React 19 · TypeScript (strict) · Tailwind CSS v4 (no `tailwind.config.js`; tokens in `@theme` in `src/index.css`) · Vite 8 · pnpm 11.

```bash
pnpm dev      # http://localhost:5173
pnpm build    # tsc --noEmit && vite build
```

The `D:` drive is FAT32 (no symlinks), so `pnpm-workspace.yaml` sets `nodeLinker: hoisted`. Do not remove it.
A running `pnpm dev` holds handles on `public/`; deleting a folder there leaves it "pending delete" until the dev server restarts.

## Where things live

- `src/i18n/en.ts`, `src/i18n/tr.ts` — all visible text. Both satisfy `Content` in `src/i18n/types.ts`; **every text change must be made in both languages**.
- `src/data.ts` — language-independent data: name, email, LinkedIn, contacts, skill groups, image paths, `faceFocus`.
- `src/components/` — one file per section (Navbar, Hero, About, Experience, Skills, Projects, Education, Footer); `ui/` holds shared pieces.
- `public/images/` — Disney/3D character renders (white-background JPGs). `public/certificates/` — certificate PDFs.
- `public/favicon.png` — round, transparent-cornered crop of the navbar avatar (same `faceFocus.avatar` crop), rendered once with headless Edge; regenerate it if the avatar changes.
- Content source of truth is her CV (EN + TR PDFs, kept outside the repo in `D:\berfin`).

## Rules (decided with the owner — do not change without asking)

- **Privacy:** never publish her phone number. No CV PDF in `public/` (it contains the phone). LinkedIn replaces "Download CV".
- **Email:** never a bare `mailto:` link — use `ui/EmailMenu` (Gmail / mail app / copy), because `mailto:` does nothing without a default mail client.
- **URL stays bare:** in-page links go through `useCleanUrl` (scroll without writing `#hash`; `?lang=` is applied, then stripped).
- **Layout style:** dark wine/cream theme with "ordered chaos" — overlapping panels and offset blocks are fine, but **cards themselves sit straight**; they may tilt/lift slightly only on hover.
- **Images:** `Photo` with `blend` multiplies white backgrounds into a paper panel; `face` zooms a full-body render to the face using a transform-origin from `faceFocus`. Those origins were measured by rendering crops — re-measure rather than guess if an image changes.
- All certificate links are labelled "Verify" / "Doğrula", whether they point to an online verification page (`url`) or a PDF (`file`).
- No made-up content (e.g. skill percentages): everything shown must be backed by the CV or documents she provided.

## Code conventions

- Strict TypeScript, no `any`. Match the existing Tailwind-in-JSX style; comments only for non-obvious *why*.
- `lucide-react` v1 has no brand icons — GitHub/LinkedIn are inline SVGs in `ui/SocialIcon.tsx`.
- Keep layouts working at 375px, 768px and 1440px.
