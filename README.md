# GB Creative Lab – Portfolio Website

A modern portfolio website built with **React**, **Vite**, and **TailwindCSS**.  
The site showcases services, projects, processes, and contact details for **GB Creative Lab**, using reusable components, responsive layouts, and glassmorphism-inspired design.

---

## 🚀 Features

- ⚡ Fast bundling with **Vite**
- 🎨 Styled with **TailwindCSS + custom CSS**
- 📱 **Mobile-first, responsive design** (3 breakpoints: phone, tablet, desktop)
- 🧩 Modular & reusable **React components**
- ✨ Glassmorphism effects, smooth transitions, and custom buttons
- 🖼️ Optimized asset loading (lazy loading, async decoding)

---

## 📂 File Structure

<pre>
gb-creative-lab/
├── public/ # Static assets
│ └── vite.svg
├── src/ # Main source code
│ ├── assets/ # Images, icons, SVGs
│ │ ├── BlueLine.svg
│ │ ├── Blue_dot.svg
│ │ ├── HomeBg.svg
│ │ ├── ServicesIcon1.svg
│ │ ├── Rectangle3.jpg
│ │ ├── Arrow.svg
│ │ ├── MailSVG.svg
│ │ ├── CallSVG.svg
│ │ ├── LocationSVG.svg
│ │ └── ...other assets
│ │
│ ├── components/ # Reusable UI components
│ │ ├── navbar.jsx
│ │ ├── footer.jsx
│ │ ├── projectshowcase.jsx
│ │ └── home/
| | | ├── hero_section.jsx
| | | ├── about.jsx
| | | ├── projects.jsx
| | | ├── process.jsx
| | | ├── services.jsx
| | └ └── contact.jsx
│ │
│ ├── pages/ # Page-level components
│ │ ├── homepage.jsx
│ │ ├── projectspage.jsx
│ │ └── testpage.jsx
│ │
│ ├── styles/ # Global & component-specific CSS
│ │ ├── index.css
│ │ ├── reusable.css
│ │ └── navbar.css
│ │
│ ├── App.jsx # App wrapper, routes
│ ├── main.jsx # React entry point
│ └── index.css # Tailwind + global styles
│
├── package.json
├── vite.config.js
└── README.md
</pre>

---

## ⚙️ Tech Stack

- **React 18** – UI components
- **Vite** – Development & bundling
- **TailwindCSS** – Utility-first CSS framework
- **Custom CSS** – Glassmorphism & reusable styles

---

## 📦 Installation & Setup

```bash
# Clone repository
git clone https://github.com/vinaykollikani/gb-creative-lab.git

cd gb-creative-lab

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

# 📸 Screenshots

(Add some hero, projects, and contact section screenshots here for showcase)
