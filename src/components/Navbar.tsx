import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import styled from 'styled-components';
import { navigationLinks } from '../data/navigation';
import type { ThemeMode } from '../types';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  themeMode: ThemeMode;
  onToggleTheme: () => void;
}

const Nav = styled.header`
  position: fixed;
  inset: 0 0 auto;
  z-index: 1000;
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  background: ${({ theme }) => theme.colors.surface}d9;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const NavInner = styled.div`
  width: min(1120px, calc(100% - 40px));
  min-height: 76px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.03em;
`;

const Mark = styled.span`
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentStrong});
  color: #fff;
  box-shadow: 0 8px 22px ${({ theme }) => theme.colors.accentSoft};
`;

const Links = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 26px;

  a {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.9rem;
    font-weight: 600;
    transition: color 180ms ease, transform 180ms ease;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.text};
    transform: translateY(-1px);
  }

  @media (max-width: 860px) {
    position: absolute;
    top: 76px;
    left: 16px;
    right: 16px;
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 12px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 18px;
    background: ${({ theme }) => theme.colors.surfaceElevated};
    box-shadow: 0 18px 50px ${({ theme }) => theme.colors.shadow};

    a {
      padding: 13px 14px;
      border-radius: 12px;
    }

    a:hover {
      background: ${({ theme }) => theme.colors.accentSoft};
    }
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export function Navbar({ themeMode, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => setOpen(false);

  return (
    <Nav>
      <NavInner>
        <Brand href="#home" onClick={handleNavClick} aria-label="Vinayak Singh home">
          <Mark>VS</Mark>
          Vinayak Singh
        </Brand>

        <Links $open={open} aria-label="Primary navigation">
          {navigationLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={handleNavClick}>
              {link.label}
            </a>
          ))}
        </Links>

        <Actions>
          <ThemeToggle mode={themeMode} onToggle={onToggleTheme} />
          <button
            type="button"
            className="icon-button mobile-menu-button"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </Actions>
      </NavInner>
    </Nav>
  );
}