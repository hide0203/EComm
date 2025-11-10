# Kunal AI E-commerce (Vite + React + Tailwind)

Simple single-page template showcasing AI/ML products and resources.

## Setup (locally)
1. Install Node.js (>=16).
2. In project folder run:
   ```
   npm install
   npm run dev
   ```
3. Build for production:
   ```
   npm run build
   npm run preview
   ```

## Netlify deployment
1. Push this project to a Git repository.
2. In Netlify, choose 'New site from Git' and connect your repo.
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy.

Tailwind is configured via `postcss.config.cjs` and `tailwind.config.cjs`.
