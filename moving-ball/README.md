# Moving Ball (React + Vite)

Local dev commands (PowerShell):

```powershell
cd 'c:\Users\Hide\Documents\OSST\moving-ball'
npm install
npm run dev
# open http://localhost:5173
```

Notes:
- This project uses Vite + React. Use `npm run build` and `npm run preview` to build and inspect production output.
Moving Ball (React)

This is a tiny React demo that shows a ball moving back and forth inside a track using `requestAnimationFrame` and React hooks.

Files:
- `index.html` — Entry page. Loads React, ReactDOM, and Babel from CDN and runs the app.
- `src/app.jsx` — React code (no bundler; compiled in browser by Babel).
- `styles.css` — Basic styles for the page and the ball.

Run:
- Open `moving-ball/index.html` in a browser (double-click or serve with a static server).
- No build step required.

Notes:
- For development with live reload, consider using a simple static server like `npx http-server` or a VS Code Live Server extension.
- The demo is intentionally dependency-free so you can run it locally without Node.js.
