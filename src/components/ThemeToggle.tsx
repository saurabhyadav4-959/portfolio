import { FiMoon, FiSun } from 'react-icons/fi';
import type { ThemeToggleProps } from '../types';

export function ThemeToggle({ mode, onToggle }: ThemeToggleProps) {
  const isDark = mode === 'dark';

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={onToggle}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
      className="icon-button"
    >
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}