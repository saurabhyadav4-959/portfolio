export type ThemeMode = 'light' | 'dark';

export interface ThemeConfig {
  mode: ThemeMode;
  colors: {
    background: string;
    surface: string;
    surfaceElevated: string;
    text: string;
    textMuted: string;
    border: string;
    accent: string;
    accentStrong: string;
    accentSoft: string;
    shadow: string;
  };
}

export interface NavigationLink {
  id: string;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  icon: string;
}

export interface ProjectCardProps {
  project: Project;
}

export interface SkillCardProps {
  skill: Skill;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface SectionProps {
  id?: string;
  children: React.ReactNode;
}

export interface ThemeToggleProps {
  mode: ThemeMode;
  onToggle: () => void;
}