import { FiBook } from 'react-icons/fi';
import styled from 'styled-components';

const Section = styled.section`
  padding: 110px 0;
  background: ${({ theme }) => theme.colors.surface};
`;

const Inner = styled.div`
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 70px;
  align-items: start;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 34px;
  }
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

const Card = styled.article`
  position: relative;
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  margin-bottom: 24px;
  border-radius: 14px;
  color: ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.colors.accentSoft};
`;

const Degree = styled.h3`
  margin: 0 0 7px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
`;

const College = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 700;
`;

const Description = styled.p`
  margin: 20px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.75;
`;

export function Education() {
  return (
    <Section id="education">
      <Inner>
        <Layout>
          <div>
            <Kicker>Education</Kicker>
            <Title>Learning the fundamentals and applying them.</Title>
          </div>
          <Card>
            <Icon><FiBook /></Icon>
            <Degree>B.Tech in Computer Engineering</Degree>
            <College>SLRTCE</College>
            <Description>
              Current academic journey focused on computer engineering fundamentals,
              programming, software development, and practical project work.
              Additional dates, grades, and achievements can be added when available.
            </Description>
          </Card>
        </Layout>
      </Inner>
    </Section>
  );
}