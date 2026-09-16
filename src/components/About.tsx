import { FiBookOpen, FiCpu, FiLayers } from 'react-icons/fi';
import styled from 'styled-components';

const Section = styled.section`
  padding: 110px 0;
`;

const Inner = styled.div`
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
`;

const Header = styled.div`
  max-width: 680px;
  margin-bottom: 48px;
`;

const Kicker = styled.p`
  margin: 0 0 10px;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.1rem, 5vw, 3.7rem);
  line-height: 1;
  letter-spacing: -0.055em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 70px;
  align-items: start;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 38px;
  }
`;

const Copy = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.85;
  font-size: 1rem;

  p { margin: 0 0 18px; }
`;

const Highlights = styled.div`
  display: grid;
  gap: 12px;
`;

const Card = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  transition: transform 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const IconBox = styled.div`
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.colors.accentSoft};
`;

export function About() {
  return (
    <Section id="about">
      <Inner>
        <Header>
          <Kicker>About me</Kicker>
          <Title>A student mindset, with a builder&apos;s curiosity.</Title>
        </Header>

        <Grid>
          <Copy>
            <p>
              I&apos;m Vinayak Singh, a Computer Engineering student at SLRTCE who enjoys turning
              ideas into practical software experiences.
            </p>
            <p>
              My interests include web development, React, TypeScript, Python, Machine Learning,
              software development, and problem solving. I&apos;m focused on strengthening my
              fundamentals while exploring tools that help me build clean and useful applications.
            </p>
            <p>
              This portfolio reflects that learning journey: hands-on projects, reusable React
              components, thoughtful styling, and a continuous interest in learning what comes next.
            </p>
          </Copy>

          <Highlights>
            <Card><IconBox><FiLayers /></IconBox><div><strong>Web Development</strong><br /><span>React, TypeScript & modern UI</span></div></Card>
            <Card><IconBox><FiCpu /></IconBox><div><strong>Problem Solving</strong><br /><span>Learning by building practical projects</span></div></Card>
            <Card><IconBox><FiBookOpen /></IconBox><div><strong>Continuous Learning</strong><br /><span>Exploring software and ML concepts</span></div></Card>
          </Highlights>
        </Grid>
      </Inner>
    </Section>
  );
}