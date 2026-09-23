
# Portfolio Website — Taufiiqul Hakim (FIQTOR)

A dark-mode personal portfolio built with React and Tailwind CSS, featuring a
GSAP hero intro, scroll-reveal sections and an IntersectionObserver-powered
scroll-spy navigation.

## ✨ Features

- **Animated hero** — per-letter GSAP intro scoped with `gsap.context`.
- **Scroll-reveal sections** — shared `Section` wrapper built on framer-motion.
- **Scroll-spy navbar** — the active section is highlighted as you scroll.
- **Content as data** — profile, skills and projects live in `src/data/portfolio.js`.
- **Responsive** — mobile-first layout with a floating pill navigation.

## 🛠 Tech Stack

- **Framework:** [React 18](https://react.dev/) (Create React App)
- **Routing:** [React Router](https://reactrouter.com/)
- **Animation:** [GSAP](https://gsap.com/) + [Framer Motion](https://www.framer.com/motion/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 16 or higher) and
`npm` installed.

### Installation

```bash
git clone https://github.com/FIQTOR/GDGOC-ITS-portfolio-website.git
cd GDGOC-ITS-portfolio-website
npm install
```

### Scripts

```bash
npm start        # Run the dev server on http://localhost:3000
npm test         # Run the test suite
npm run build    # Create a production build in build/
```

## 📁 Project Structure

```
src/
├── components/     # Presentational + layout components
├── data/           # portfolio.js — single source of content
├── hooks/          # useScrollSpy
├── pages/          # Homepage, NotFound
├── routes.jsx      # Route table
└── index.js        # App entry point
```

## ✏️ Editing Content

Most updates are data-only changes in `src/data/portfolio.js` — add a project to
the `projects` array, a skill to a group, or a link to `navLinks` without
touching any JSX.

## 📝 License

Distributed under the MIT License.
