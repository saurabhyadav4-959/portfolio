import { FiArrowDownRight, FiCode , FiExternalLink } from 'react-icons/fi';
import styled from 'styled-components';

const HeroSection = styled.section`
  min-height: 100vh;
  padding: 150px 0 90px;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
`;

const Glow = styled.div`
  position: absolute;
  width: 520px;
  height: 520px;
  right: -150px;
  top: 70px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accentSoft};
  filter: blur(30px);
  pointer-events: none;
`;

const HeroGrid = styled.div`
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.12fr 0.88fr;
  align-items: center;
  gap: 70px;
  position: relative;
  z-index: 1;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 44px;
  }
`;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 18px;
  padding: 7px 11px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.surfaceElevated};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Dot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 0 5px rgba(52, 211, 153, 0.12);
`;

const Heading = styled.h1`
  margin: 0;
  max-width: 760px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(3.1rem, 7vw, 5.8rem);
  line-height: 0.96;
  letter-spacing: -0.065em;

  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Intro = styled.p`
  max-width: 640px;
  margin: 26px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: clamp(1rem, 2vw, 1.16rem);
  line-height: 1.8;
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
`;

const Primary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 17px;
  border-radius: 12px;
  color: #fff;
  background: ${({ theme }) => theme.colors.accent};
  font-weight: 700;
  box-shadow: 0 12px 28px ${({ theme }) => theme.colors.accentSoft};
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 34px ${({ theme }) => theme.colors.accentSoft};
  }
`;

const Secondary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 17px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surfaceElevated};
  font-weight: 700;
  transition: transform 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Visual = styled.div`
  min-height: 390px;
  display: grid;
  place-items: center;
  position: relative;
`;

const CodeCard = styled.div`
  width: min(420px, 100%);
  padding: 22px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  box-shadow: 0 28px 70px ${({ theme }) => theme.colors.shadow};
  transform: rotate(2deg);
  animation: float 5s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: rotate(2deg) translateY(0); }
    50% { transform: rotate(2deg) translateY(-10px); }
  }
`;

const CodeTop = styled.div`
  display: flex;
  gap: 7px;
  margin-bottom: 20px;

  span {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.border};
  }
`;

const Code = styled.pre`
  margin: 0;
  overflow: auto;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: 'SFMono-Regular', Consolas, monospace;
  font-size: 0.82rem;
  line-height: 1.9;

  .accent { color: ${({ theme }) => theme.colors.accent}; }
  .strong { color: ${({ theme }) => theme.colors.text}; }
`;

export function Hero() {
  return (
    <HeroSection id="home">
      <Glow aria-hidden="true" />
      <HeroGrid>
        <div>
          <Eyebrow><Dot /> Student Developer</Eyebrow>
          <Heading>
            Building ideas into <span>useful software.</span>
          </Heading>
          <Intro>
            I&apos;m Vinayak Singh, a Computer Engineering student and aspiring software developer.
            Passionate about building modern web applications, learning new technologies, and solving
            real-world problems through software.
          </Intro>
          <Buttons>
            <Primary href="#projects">
              View My Projects <FiArrowDownRight />
            </Primary>
            <Secondary href="#contact">
              Contact Me <FiExternalLink />
            </Secondary>
          </Buttons>
        </div>

        <Visual aria-label="Developer code illustration">
          <CodeCard>
            <CodeTop><span /><span /><span /></CodeTop>
            <Code>
              <span className="strong">const</span> developer = {'{'}{'\n'}
              {'  '}name: <span className="accent">&quot;Vinayak Singh&quot;</span>,{'\n'}
              {'  '}focus: <span className="accent">&quot;Web Development&quot;</span>,{'\n'}
              {'  '}learning: [<span className="accent">&quot;TypeScript&quot;</span>, <span className="accent">&quot;React&quot;</span>],{'\n'}
              {'  '}mindset: <span className="accent">&quot;Keep building&quot;</span>{'\n'}
              {'}'};
            </Code>
          </CodeCard>
          <FiCode size={54} style={{ position: 'absolute', bottom: 30, left: 12, opacity: 0.2 }} />
        </Visual>
      </HeroGrid>
    </HeroSection>
  );
}