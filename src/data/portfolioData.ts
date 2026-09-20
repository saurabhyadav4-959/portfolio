import type { NavigationLink, Project, Skill, SocialLink } from '../types';

export const navigationLinks: NavigationLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const skills: Skill[] = [
  // Languages
  { name: 'C/C++', icon: '⚡', category: 'Languages', proficiency: 85 },
  { name: 'Python', icon: '🐍', category: 'Languages', proficiency: 80 },
  { name: 'Java', icon: '☕', category: 'Languages', proficiency: 75 },
  { name: 'SQL', icon: '🗃️', category: 'Languages', proficiency: 70 },

  // Frontend
  { name: 'HTML/CSS', icon: '🎨', category: 'Frontend', proficiency: 90 },
  { name: 'JavaScript', icon: '✨', category: 'Frontend', proficiency: 82 },
  { name: 'React', icon: '⚛️', category: 'Frontend', proficiency: 78 },
  { name: 'TypeScript', icon: '🔷', category: 'Frontend', proficiency: 65 },

  // Backend
  { name: 'Node.js', icon: '🟢', category: 'Backend', proficiency: 72 },
  { name: 'Express.js', icon: '🚀', category: 'Backend', proficiency: 68 },
  { name: 'MongoDB', icon: '🍃', category: 'Backend', proficiency: 65 },
  { name: 'REST APIs', icon: '🔗', category: 'Backend', proficiency: 75 },

  // Tools
  { name: 'Git', icon: '📦', category: 'Tools', proficiency: 82 },
  { name: 'GitHub', icon: '🐙', category: 'Tools', proficiency: 85 },
  { name: 'VS Code', icon: '💎', category: 'Tools', proficiency: 90 },
  { name: 'Linux', icon: '🐧', category: 'Tools', proficiency: 70 },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce web application with user authentication, product catalog, shopping cart, and payment integration. Built with modern web technologies for a seamless shopping experience.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS'],
    githubUrl: 'https://github.com/saurabh-yadav',
    liveUrl: '#',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    icon: '🛒',
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description:
      'A responsive weather application that displays real-time weather data, 5-day forecasts, and interactive maps. Features location-based search and beautiful weather animations.',
    techStack: ['React', 'JavaScript', 'REST API', 'CSS'],
    githubUrl: 'https://github.com/saurabh-yadav',
    liveUrl: '#',
    gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    icon: '🌤️',
  },
  {
    id: 3,
    title: 'Task Manager App',
    description:
      'A productivity-focused task management application with drag-and-drop functionality, priority tagging, deadline tracking, and collaborative workspace features.',
    techStack: ['React', 'TypeScript', 'Node.js', 'SQL'],
    githubUrl: 'https://github.com/saurabh-yadav',
    liveUrl: '#',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    icon: '✅',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description:
      'This very portfolio! A premium, responsive personal website built with React and TypeScript featuring glassmorphism design, dark/light themes, and smooth animations.',
    techStack: ['React', 'TypeScript', 'Styled Components', 'Vite'],
    githubUrl: 'https://github.com/saurabh-yadav',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    icon: '🚀',
  },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/saurabh-yadav', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/saurabh-yadav', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/saurabh_yadav', icon: 'twitter' },
  { name: 'Email', url: 'mailto:saurabh.yadav@email.com', icon: 'mail' },
];

export const aboutStats = [
  { label: 'Projects', value: '5+' },
  { label: 'Technologies', value: '8+' },
  { label: 'Field', value: 'CSE' },
];
