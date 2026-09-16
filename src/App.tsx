import { useEffect, useMemo, useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import type { ThemeConfig, ThemeMode } from './types';
import './styles/global.css';
import './styles/responsive.css';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    transition: background-color 250ms ease, color 250ms ease;
  }

  .icon-button {
    width: 40px;
    height: 40px;
    display: inline-grid;
    place-items: center;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 11px;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.surfaceElevated};
    transition: color 180ms ease, border-color 180ms ease, transform 180ms ease, background 180ms ease;
  }

  .icon-button:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-1px);
  }

  .mobile-menu-button {
    display: none;
  }

  @media (max-width: 860px) {
    .mobile-menu-button {
      display: inline-grid;
    }
  }
`;

const lightTheme: ThemeConfig = {
  mode: 'light',
  colors: {
    background: '#f7f8fc',
    surface: '#eef1f7',
    surfaceElevated: '#ffffff',
    text: '#111827',
    textMuted: '#5b6475',
    border: '#dce1eb',
    accent: '#4f46e5',
    accentStrong: '#7c3aed',
    accentSoft: 'rgba(79, 70, 229, 0.12)',
    shadow: 'rgba(17, 24, 39, 0.10)',
  },
};

const darkTheme: ThemeConfig = {
  mode: 'dark',
  colors: {
    background: '#090d18',
    surface: '#0d1322',
    surfaceElevated: '#111827',
    text: '#f5f7fb',
    textMuted: '#9aa5b7',
    border: '#202b3e',
    accent: '#818cf8',
    accentStrong: '#a78bfa',
    accentSoft: 'rgba(129, 140, 248, 0.14)',
    shadow: 'rgba(0, 0, 0, 0.35)',
  },
};

function getInitialTheme(): ThemeMode {
  const saved = localStorage.getItem('portfolio-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return 'dark';
}

function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', themeMode);
  }, [themeMode]);

  const theme = useMemo(
    () => (themeMode === 'dark' ? darkTheme : lightTheme),
    [themeMode],
  );

  const toggleTheme = () => {
    setThemeMode((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar themeMode={themeMode} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;