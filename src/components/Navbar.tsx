import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import styled, { keyframes } from 'styled-components';
import { navigationLinks } from '../data/portfolioData';
import type { ThemeMode } from '../types';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  themeMode: ThemeMode;
  onToggleTheme: () => void;
}

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(9, 13, 22, 0.82)' : 'rgba(248, 250, 252, 0.82)'};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: background 200ms ease, border-color 200ms ease;
  animation: ${slideDown} 0.5s ease-out;
`;

const NavContainer = styled.div`
  width: min(1200px, calc(100% - 48px));
  height: 72px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 640px) {
    width: calc(100% - 32px);
    height: 64px;
  }
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;

  &:hover {
    opacity: 0.92;
  }
`;

const Monogram = styled.div`
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, #8b5cf6);
  color: #ffffff;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: -0.02em;
  box-shadow: 0 4px 16px ${({ theme }) => theme.colors.accentGlow};
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
`;

const BrandTitle = styled.span`
  line-height: 1.2;
`;

const BrandSub = styled.span`
  font-size: 0.68rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: 'JetBrains Mono', monospace;
`;

const NavLinks = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 28px;

  a {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.88rem;
    font-weight: 500;
    transition: color 180ms ease;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.colors.accent};
      border-radius: 2px;
      transition: width 200ms ease;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.text};

      &::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 992px) {
    position: absolute;
    top: 72px;
    left: 16px;
    right: 16px;
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 16px;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surfaceElevated};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    backdrop-filter: blur(20px);

    a {
      padding: 12px 14px;
      border-radius: 10px;
      font-size: 0.95rem;

      &::after {
        display: none;
      }

      &:hover {
        background: ${({ theme }) => theme.colors.accentSoft};
        color: ${({ theme }) => theme.colors.accent};
      }
    }
  }
`;

const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MobileToggle = styled.button`
  display: none;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surfaceSubtle};
  transition: border-color 180ms ease;

  @media (max-width: 992px) {
    display: grid;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export function Navbar({ themeMode, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <Header>
      <NavContainer>
        <Brand href="#home" aria-label="Saurabh Yadav Home">
          <Monogram>SY</Monogram>
          <BrandText>
            <BrandTitle>Saurabh Yadav</BrandTitle>
            <BrandSub>Portfolio</BrandSub>
          </BrandText>
        </Brand>

        <NavLinks $open={isOpen} aria-label="Primary Navigation">
          {navigationLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={handleNavClick}>
              {link.label}
            </a>
          ))}
        </NavLinks>

        <RightControls>
          <ThemeToggle mode={themeMode} onToggle={onToggleTheme} />
          <MobileToggle
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </MobileToggle>
        </RightControls>
      </NavContainer>
    </Header>
  );
}