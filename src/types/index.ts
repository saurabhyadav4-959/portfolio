import type { ReactNode } from 'react';

export type ThemeMode = 'light' | 'dark';

export interface ThemeConfig {
  mode: ThemeMode;
  colors: {
    background: string;
    surface: string;
    surfaceElevated: string;
    surfaceSubtle: string;
    text: string;
    textMuted: string;
    textSubtle: string;
    border: string;
    borderFocus: string;
    accent: string;
    accentStrong: string;
    accentSoft: string;
    accentGlow: string;
    success: string;
    successSoft: string;
    warning: string;
    warningSoft: string;
    shadow: string;
    cardHighlight: string;
    codeBg: string;
  };
}

export interface NavigationLink {
  id: string;
  label: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'Tools';
  proficiency: number; // 0-100
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  gradient: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ThemeToggleProps {
  mode: ThemeMode;
  onToggle: () => void;
}