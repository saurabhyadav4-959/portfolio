import { FiGithub, FiLinkedin } from 'react-icons/fi';
import styled from 'styled-components';

const FooterWrap = styled.footer`
  padding: 34px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
`;

const Inner = styled.div`
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const Brand = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
`;

const Muted = styled.p`
  margin: 6px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.78rem;
`;

const Socials = styled.div`
  display: flex;
  gap: 8px;
`;

export function Footer() {
  return (
    <FooterWrap>
      <Inner>
        <div>
          <Brand>Vinayak Singh</Brand>
          <Muted>© {new Date().getFullYear()} Vinayak Singh. Student developer portfolio.</Muted>
        </div>
        <Socials>
          <a className="icon-button" href="#" aria-label="GitHub placeholder"><FiGithub /></a>
          <a className="icon-button" href="#" aria-label="LinkedIn placeholder"><FiLinkedin /></a>
        </Socials>
      </Inner>
    </FooterWrap>
  );
}