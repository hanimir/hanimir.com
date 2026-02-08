# hanimir.com

Simple React + TypeScript resume site.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Update Resume Content

Edit `src/resumeData.ts`. The page rendering in `src/App.tsx` is data-driven, so content changes should only require updating that file.

## PDF Output

- `public/Hani-Mir-Resume.pdf` is the exact downloadable PDF used by the "Download Exact PDF" button.
- "Print / Save as PDF" uses print styles from `src/App.css`.
