import { FiCode } from 'react-icons/fi';
import styled from 'styled-components';
import { skills } from '../data/skills';
import type { SkillCardProps } from '../types';

const Section = styled.section`
  padding: 110px 0;
  background: ${({ theme }) => theme.colors.surface};
`;

const Inner = styled.div`
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
`;

const Header = styled.div`
  max-width: 680px;
  margin-bottom: 44px;
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
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 980px) { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 620px) { grid-template-columns: repeat(2, 1fr); }
`;

const Card = styled.article`
  min-height: 150px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 18px 40px ${({ theme }) => theme.colors.shadow};
  }
`;

const SkillIcon = styled.div`
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.colors.accentSoft};
  font-size: 0.76rem;
  font-weight: 800;
`;

const Name = styled.h3`
  margin: 18px 0 5px;
  font-size: 1rem;
`;

const Category = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.76rem;
  font-weight: 600;
`;

function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card>
      <SkillIcon>{skill.icon || <FiCode />}</SkillIcon>
      <div>
        <Name>{skill.name}</Name>
        <Category>{skill.category}</Category>
      </div>
    </Card>
  );
}

export function Skills() {
  return (
    <Section id="skills">
      <Inner>
        <Header>
          <Kicker>Skills</Kicker>
          <Title>Tools I&apos;m learning and building with.</Title>
        </Header>
        <Grid>
          {skills.map((skill) => <SkillCard key={skill.id} skill={skill} />)}
        </Grid>
      </Inner>
    </Section>
  );
}