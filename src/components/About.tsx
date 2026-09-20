import { FiCode, FiFolder, FiUser } from 'react-icons/fi';
import styled, { keyframes } from 'styled-components';
import { aboutStats } from '../data/portfolioData';

/* ─── Animations ─── */
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* ─── Styles ─── */
const Section = styled.section`
  padding: 100px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
`;

const Container = styled.div`
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;

  @media (max-width: 640px) {
    width: calc(100% - 32px);
  }
`;

const SectionHeader = styled.div`
  max-width: 640px;
  margin-bottom: 48px;
  animation: ${fadeInUp} 0.6s ease-out;
`;

const Kicker = styled.div`
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 8px;
  font-family: 'JetBrains Mono', monospace;
`;

const SectionTitle = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 2.8rem);
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 12px;
`;

const SectionDescription = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1rem;
  line-height: 1.7;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const AboutImageWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  animation: ${fadeInUp} 0.6s ease-out 0.15s both;
`;

const ImageCard = styled.div`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.colors.shadow};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.accent}, #8b5cf6, #ec4899);
  }

  img {
    display: block;
    width: 100%;
    max-width: 400px;
    aspect-ratio: 1;
    object-fit: cover;
  }
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${fadeInUp} 0.6s ease-out 0.3s both;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1rem;
  line-height: 1.8;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 8px;
`;

const StatCard = styled.div`
  padding: 20px 16px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
  transition: transform 200ms ease, border-color 200ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const StatIcon = styled.div`
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  margin: 0 auto 10px;
  background: ${({ theme }) => theme.colors.accentSoft};
  color: ${({ theme }) => theme.colors.accent};
`;

const StatValue = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2px;
`;

const StatLabel = styled.div`
  font-size: 0.76rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 500;
`;

const statIcons = [<FiFolder size={18} />, <FiCode size={18} />, <FiUser size={18} />];

export function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeader>
          <Kicker>About Me</Kicker>
          <SectionTitle>Getting to Know Me</SectionTitle>
          <SectionDescription>
            A brief introduction about who I am and what drives my passion for technology.
          </SectionDescription>
        </SectionHeader>

        <ContentGrid>
          <AboutImageWrap>
            <ImageCard>
              <img src="/avatar.jpg" alt="Saurabh Yadav" />
            </ImageCard>
          </AboutImageWrap>

          <AboutText>
            <Paragraph>
              Hey there! I'm <Highlight>Saurabh Yadav</Highlight>, a Computer Science Engineering
              student who is deeply passionate about creating impactful digital experiences. I believe
              in writing clean, efficient code that solves real-world problems.
            </Paragraph>

            <Paragraph>
              My journey in tech started with curiosity about how things work under the hood, and
              it has grown into a full-blown love affair with <Highlight>web development</Highlight>,{' '}
              <Highlight>problem solving</Highlight>, and <Highlight>software engineering</Highlight>.
              I'm constantly learning and exploring new technologies to expand my skill set.
            </Paragraph>

            <Paragraph>
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source, or solving competitive programming challenges. I'm always open to
              collaborating on exciting projects!
            </Paragraph>

            <StatsRow>
              {aboutStats.map((stat, idx) => (
                <StatCard key={stat.label}>
                  <StatIcon>{statIcons[idx]}</StatIcon>
                  <StatValue>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsRow>
          </AboutText>
        </ContentGrid>
      </Container>
    </Section>
  );
}
