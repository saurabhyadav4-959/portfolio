# Modern Professional Portfolio

A polished, responsive personal portfolio for **Vinayak Singh**, a Computer Engineering student and aspiring software developer.

This project was created for a **React — Styling in React** assignment and intentionally demonstrates several styling approaches together: external CSS, inline styles, styled-components/CSS-in-JS, Flexbox, CSS Grid, responsive media queries, and theme-based styling.

## Features

- Modern student-developer portfolio layout
- Responsive navigation with mobile menu
- Smooth scrolling between sections
- Dark/light theme toggle
- Theme persistence with `localStorage`
- Reusable React + TypeScript components
- Skills and project cards rendered from typed data
- Contact form with client-side validation
- Frontend-only success state for the contact form
- Hover, focus, and subtle transition effects
- Reduced-motion support
- Accessible labels and interactive controls
- No fake work experience, achievements, statistics, or social profiles

## Technologies

- React 19
- TypeScript 7
- Vite 8
- styled-components 6
- React Icons 5
- HTML
- CSS

The package versions reflect stable npm releases checked while this project was generated.

## Installation

> Vite 8 requires a compatible modern Node.js version. Use Node.js 20.19+ or 22.12+.

1. Extract the ZIP.
2. Open the `modern-portfolio` folder in VS Code.
3. Open the terminal.
4. Install dependencies:

```bash
npm install
```

## Run the project

Start the development server:

```bash
npm run dev
```

Then open the local URL shown by Vite in your browser.

## Production build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project structure

```text
modern-portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/
│   │   ├── navigation.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── styles/
│   │   ├── global.css
│   │   └── responsive.css
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── styled.d.ts
│   └── styles.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── .gitignore
└── README.md
```

## Styling techniques demonstrated

### External CSS

`src/styles/global.css` contains global browser rules, typography, selection styling, reduced-motion support, and basic element defaults. `responsive.css` demonstrates media queries.

### Inline styling

`ThemeToggle.tsx` contains a small meaningful inline style for icon alignment. `Hero.tsx` also uses a small inline style for the decorative code icon.

### styled-components

The main UI uses reusable styled components such as navigation, cards, sections, buttons, form fields, and project layouts.

### CSS-in-JS and themes

`ThemeProvider` supplies typed light and dark theme objects. Styled components read values such as:

- background
- surface
- text
- muted text
- border
- accent
- shadows

The selected mode is stored in `localStorage`, so refreshing the page keeps the chosen theme.

### Flexbox

Flexbox is used for the navbar, navigation links, action groups, buttons, tags, footer, and other aligned UI.

### CSS Grid

CSS Grid is used for the hero layout, skills cards, project cards, education/contact layouts, and responsive content.

## TypeScript concepts used

The project intentionally uses TypeScript throughout React components.

Examples include:

- `Project` interface for project data
- `Skill` interface for skill data
- `NavigationLink` interface for navigation data
- `ThemeConfig` and `ThemeMode` for theming
- `ProjectCardProps` and `SkillCardProps` for component props
- `ContactFormData` and `ContactErrors` for form state
- Typed React event handling with `FormEvent<HTMLFormElement>`
- Typed state with `useState`
- Union types such as `'light' | 'dark'`

No `any` type is required by the project.

## Theme switching

The navbar contains a sun/moon toggle.

When clicked:

1. React changes the `ThemeMode`.
2. `ThemeProvider` supplies the corresponding theme object.
3. styled-components update colors throughout the UI.
4. The selected value is saved as `portfolio-theme` in `localStorage`.
5. On refresh, the saved theme is restored.

## Responsive design

The layout is designed for desktop, laptop, tablet, and mobile widths.

The mobile navbar becomes a hamburger menu, project cards collapse to one column, skills resize from five columns to fewer columns, the hero becomes vertical, and the contact form adapts to smaller screens.

## Placeholders to replace

Replace these before using the portfolio publicly:

- `[vinayak.singh.demo@example.com]`
- Project GitHub `#` links in `src/data/projects.ts`
- Footer GitHub `#` link
- Footer LinkedIn `#` link
- Any other personal profile URLs you want to add
- Optional live demo URLs in the project data

The project deliberately does **not** invent real social profiles or repository URLs.

## Future improvements

Possible next steps:

- Connect the contact form to a real backend or email service
- Add real project screenshots
- Add real GitHub and LinkedIn URLs
- Add a downloadable resume
- Add more project details or dedicated project pages
- Add a CMS or API for project data
- Add automated tests
