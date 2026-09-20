import { useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import type { ThemeConfig, ThemeMode } from './types';
import './styles/global.css';
import './styles/responsive.css';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    transition: background-color 220ms ease, color 220ms ease;
  }
`;

const darkTheme: ThemeConfig = {
  mode: 'dark',
  colors: {
    background: '#090d16',
    surface: '#0e1424',
    surfaceElevated: '#131b2e',
    surfaceSubtle: '#172138',
    text: '#f1f5f9',
    textMuted: '#94a3b8',
    textSubtle: '#64748b',
    border: 'rgba(255, 255, 255, 0.08)',
    borderFocus: '#6366f1',
    accent: '#6366f1',
    accentStrong: '#4f46e5',
    accentSoft: 'rgba(99, 102, 241, 0.14)',
    accentGlow: 'rgba(99, 102, 241, 0.25)',
    success: '#10b981',
    successSoft: 'rgba(16, 185, 129, 0.15)',
    warning: '#f59e0b',
    warningSoft: 'rgba(245, 158, 11, 0.15)',
    shadow: '0 12px 32px -8px rgba(0, 0, 0, 0.5)',
    cardHighlight: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
    codeBg: '#0b0f19',
  },
};

const lightTheme: ThemeConfig = {
  mode: 'light',
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    surfaceElevated: '#ffffff',
    surfaceSubtle: '#f1f5f9',
    text: '#0f172a',
    textMuted: '#475569',
    textSubtle: '#94a3b8',
    border: '#e2e8f0',
    borderFocus: '#4f46e5',
    accent: '#4f46e5',
    accentStrong: '#4338ca',
    accentSoft: 'rgba(79, 70, 229, 0.1)',
    accentGlow: 'rgba(79, 70, 229, 0.2)',
    success: '#059669',
    successSoft: 'rgba(5, 150, 105, 0.12)',
    warning: '#d97706',
    warningSoft: 'rgba(217, 119, 6, 0.12)',
    shadow: '0 10px 25px -5px rgba(15, 23, 42, 0.08)',
    cardHighlight: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%)',
    codeBg: '#f1f5f9',
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

  const theme = useMemo(() => (themeMode === 'dark' ? darkTheme : lightTheme), [themeMode]);

  const toggleTheme = useCallback(() => {
    setThemeMode((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar themeMode={themeMode} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </ThemeProvider>
  );
}

export default App;