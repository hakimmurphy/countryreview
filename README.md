# Country Review — TypeScript + Vanilla JS

A lightweight single-page app that shows basic country information using **TypeScript** with plain **HTML/CSS**. Source lives in `src/` and compiles to `dist/` for static hosting. :contentReference[oaicite:1]{index=1}

---

## ✨ What’s inside
- **TypeScript** for type-safe DOM code (repo breakdown ~TS/CSS/HTML). :contentReference[oaicite:2]{index=2}
- Simple **HTML/CSS** UI (`index.html`, `styles.css`). :contentReference[oaicite:3]{index=3}
- Compiled assets in **`dist/`** and image assets in **`images/`**. :contentReference[oaicite:4]{index=4}

---

## 🗂️ Project structure
```
.
├─ dist/ # build output
├─ images/ # flags / UI images
├─ src/ # TypeScript source
├─ index.html # entry page
├─ styles.css # global styles
└─ package.json # scripts & deps
```

---

## 🚀 Getting started

### 1) Install
```bash
npm install
```

### 2) Build (TypeScript → dist)
```
# if a build script exists
npm run build

# or fallback to a direct TypeScript compile
npx tsc
```

### 3) Preview locally
```
# Python 3 built-in server (from the project root)
python3 -m http.server 5500
# then open http://localhost:5500/index.html
```
Or use VS Code’s “Live Server” extension.

---

## 🔧 Configuration notes
- Keep authored code in src/ and compile to dist/. Update tsconfig.json / scripts as desired.
- If you later fetch live data (e.g., from an external countries API), store keys in a .env and avoid committing secrets.

---

## 🛣️ Roadmap ideas
- Search by country name; filter by region
- Detail view (capital, population, currencies, languages, flag)
- Dark mode + accessible color contrast
- Client-side caching (e.g., localStorage) and basic error states

---

## 📄 License
MIT 

---

## 🗣️ Author
Hakim Murphy
