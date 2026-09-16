import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'React Todo List',
    description:
      'A React-based Todo application demonstrating components, state management, props, and task operations.',
    technologies: ['React', 'JavaScript', 'CSS'],
    icon: '✓',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'React Performance Optimization',
    description:
      'A React application demonstrating lazy loading, memoization, useMemo, useCallback, and React.memo.',
    technologies: ['React', 'JavaScript', 'Vite'],
    icon: '⚡',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Student Expense Tracker',
    description:
      'A student expense management application built with React for tracking and managing expenses.',
    technologies: ['React', 'TypeScript'],
    icon: '₹',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Realtime Chat Application',
    description:
      'A realtime chat application demonstrating communication between users and realtime messaging.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
    icon: '⌁',
    githubUrl: '#',
  },
];