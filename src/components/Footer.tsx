import { FiGithub, FiHeart, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import styled from 'styled-components';

const FooterWrap = styled.footer`
  padding: 40px 0 28px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
`;

const Container = styled.div`
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;

  @media (max-width: 640px) {
    width: calc(100% - 32px);
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialLink = styled.a`
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.surfaceSubtle};
  transition: all 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
`;

const MadeWith = styled.p`
  font-size: 0.84rem;
  color: ${({ theme }) => theme.colors.textMuted};
  display: flex;
  align-items: center;
  gap: 6px;
`;

const HeartIcon = styled(FiHeart)`
  color: #ef4444;
  fill: #ef4444;
`;

const Copyright = styled.p`
  font-size: 0.76rem;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-family: 'JetBrains Mono', monospace;
`;

export function Footer() {
  return (
    <FooterWrap>
      <Container>
        <SocialRow>
          <SocialLink href="https://github.com/saurabh-yadav" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub size={17} />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/saurabh-yadav" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={17} />
          </SocialLink>
          <SocialLink href="https://twitter.com/saurabh_yadav" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FiTwitter size={17} />
          </SocialLink>
          <SocialLink href="mailto:saurabh.yadav@email.com" aria-label="Email">
            <FiMail size={17} />
          </SocialLink>
        </SocialRow>

        <MadeWith>
          Made with <HeartIcon size={14} /> and React
        </MadeWith>

        <Copyright>
          © {new Date().getFullYear()} Saurabh Yadav. All rights reserved.
        </Copyright>
      </Container>
    </FooterWrap>
  );
}