<p align="center">
  <img src="public/favicon/favicon.svg" alt="RenaHeberg Logo" width="120" height="120">
</p>

<h1 align="center">RenaHeberg</h1>

<p align="center">
  <strong>Archive of the former non-profit web hosting association (2018–2020)</strong>
</p>

<p align="center">
  <a href="https://renaheberg.fr">
    <img src="https://img.shields.io/badge/Live%20Demo-renaheberg.fr-00B4D8?style=for-the-badge&logo=astro&logoColor=white" alt="Live Demo">
  </a>
  <img src="https://img.shields.io/badge/Astro-7.3.4-BC52EE?style=for-the-badge&logo=astro&logoColor=white" alt="Astro">
  <img src="https://img.shields.io/badge/TailwindCSS-4.1.6-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS">
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/i18n-FR%20%7C%20EN-FF6B6B?style=for-the-badge&logo=i18next&logoColor=white" alt="i18n">
</p>

---

## 📖 About

**RenaHeberg** was a French non-profit association (law 1901, RNA **W212012750**) that provided free or very low-cost web hosting services to help young associative and independent projects get started without financial barriers.

Active from **2018 to 2020**, the association served **30+ clients** and hosted **~30–60+ projects** with **99% average uptime**.

This website is a **static archive** preserving the memory of the project and its community. It is **not an active service**.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌍 **Internationalization** | Full French / English support with locale-based routing |
| 🌙 **Dark Mode** | System preference detection + manual toggle (persisted in localStorage) |
| 📱 **Responsive** | Mobile-first design, works on all screen sizes |
| ♿ **Accessible** | Semantic HTML, ARIA labels, keyboard navigation, color contrast |
| 🔍 **SEO Optimized** | Open Graph, Twitter Cards, canonical URLs, hreflang, sitemap |
| ⚡ **Performance** | Static HTML output, minimal JS, font preloading, optimized images |
| 🎨 **Modern Stack** | Astro 7 (islands architecture), TailwindCSS 4, TypeScript |

---

## 🏗 Project Structure

```text
/
├── public/
│   ├── favicon/           # Favicons & manifest (SVG, PNG, ICO, webmanifest)
│   └── images/
│       └── seo.png        # Open Graph / Twitter Card image
├── src/
│   ├── components/        # Astro components (Hero, Intro, Services, Archive, Footer, etc.)
│   ├── content/
│   │   ├── fr.json        # French translations
│   │   └── en.json        # English translations
│   ├── layouts/
│   │   └── Layout.astro   # Root layout with meta, fonts, analytics
│   ├── pages/
│   │   ├── fr/            # French routes (index.astro)
│   │   └── en/            # English routes (index.astro)
│   ├── scripts/
│   │   └── reveal.js      # IntersectionObserver scroll animations
│   ├── styles/
│   │   └── global.css     # Tailwind + custom CSS variables
│   └── utils/
│       └── i18n.ts        # i18n helpers (translations, alternate URLs)
├── astro.config.mjs       # Astro configuration (i18n, integrations)
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Commands

All commands run from the project root:

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run dev -- --background` | Start dev server in background |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro -- --help` | Show Astro CLI help |

### Background Dev Server (recommended)

```bash
# Start in background
astro dev --background

# Manage background server
astro dev status   # Check status
astro dev logs     # View logs
astro dev stop     # Stop server
```

---

## 🛠 Development

### Prerequisites
- Node.js ≥ 22.12.0
- npm (comes with Node)

### Setup
```bash
git clone https://git.renaheberg.fr
cd renaheberg-web
npm install
npm run dev
```

### Adding a New Language
1. Create `src/content/{lang}.json` following the structure of `fr.json`/`en.json`
2. Add the locale to `astro.config.mjs` (`i18n.locales`)
3. Create route folder `src/pages/{lang}/` with `index.astro`

---

## 📦 Deployment

The project outputs a **static site** to `./dist/` — deploy anywhere:

- **Static hosts**: Netlify, Vercel, Cloudflare Pages, GitHub Pages, Firebase Hosting
- **Traditional**: Any web server (Nginx, Apache, Caddy) serving `dist/`
- **Edge**: Cloudflare Workers, Vercel Edge, Netlify Edge Functions

### Build for Production
```bash
npm run build
# Output in ./dist/
```

### Environment Variables
Create `.env` from `.env.example`:
```env
PUBLIC_SITE_URL=https://renaheberg.fr
```

> **Analytics**: Cloudflare Web Analytics is managed automatically at the Cloudflare dashboard level.
> Enable it in **Cloudflare Dashboard → Web Analytics → Add Site**.
> Choose **"Automatic"** (all visitors) or **"Automatic, excluding EU visitors"** (GDPR-friendly, no consent banner needed).
> No code changes or environment variables required.

---

## 🔗 Links

- **Live Site**: [https://renaheberg.fr](https://renaheberg.fr)
- **Repository**: [Git](https://git.renaheberg.fr)

---

## 📄 License

This project is an archive of a dissolved association (2018–2020).  
The source code is available for reference and educational purposes.

---

<p align="center">
  Made by <a href="https://github.com/aproise">Aproise</a> with ❤️ using <a href="https://astro.build">Astro</a> + <a href="https://tailwindcss.com">TailwindCSS</a>
</p>