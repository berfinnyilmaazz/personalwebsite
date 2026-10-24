# Berfin Yılmaz — Personal Website

Bilingual (EN / TR) CV website. React 19 + TypeScript + Tailwind CSS v4 + Vite.

```bash
pnpm install
pnpm dev       # http://localhost:5173
pnpm build     # type-check + production build into dist/
```

- **Text (EN/TR):** `src/i18n/en.ts` and `src/i18n/tr.ts` — both satisfy the `Content` type in `src/i18n/types.ts`, so a missing translation is a compile error.
- **Shared data:** name, contacts, skills and image paths in `src/data.ts`.
- **Language:** toggle in the navbar; remembered per browser; `?lang=tr` / `?lang=en` forces one in a shared link.
- **Images:** `public/images/` — see `public/images/GORSELLER.md`. No CV PDF is published on purpose (it contains a phone number); LinkedIn is linked instead.
- **Colors / fonts:** `@theme` block in `src/index.css`.

> The `D:` drive is FAT32, which has no symlinks, so `pnpm-workspace.yaml` sets `nodeLinker: hoisted`.
