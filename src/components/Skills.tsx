import { useMemo, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { skills } from '../data/portfolioData';
import type { Skill } from '../types';

/* ─── Animations ─── */
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fillBar = keyframes`
  from { width: 0%; }
`;

/* ─── Styles ─── */
const Section = styled.section`
  padding: 100px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
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
  margin-bottom: 40px;
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

const CategoryTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 36px;
`;

const Tab = styled.button<{ $active: boolean }>`
  padding: 8px 20px;
  border-radius: 10px;
  font-size: 0.84rem;
  font-weight: 600;
  border: 1px solid ${({ $active, theme }) =>
    $active ? theme.colors.accent : theme.colors.border};
  color: ${({ $active, theme }) =>
    $active ? '#fff' : theme.colors.textMuted};
  background: ${({ $active, theme }) =>
    $active
      ? `linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.accentStrong})`
      : theme.colors.surfaceSubtle};
  transition: all 200ms ease;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ $active, theme }) => ($active ? '#fff' : theme.colors.text)};
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
`;

const SkillCard = styled.div`
  padding: 20px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform 250ms ease, border-color 250ms ease, box-shadow 250ms ease;
  animation: ${fadeInUp} 0.5s ease-out both;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 8px 30px ${({ theme }) => theme.colors.accentGlow};
  }
`;

const SkillTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

const SkillInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SkillIcon = styled.span`
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.accentSoft};
`;

const SkillName = styled.span`
  font-weight: 600;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
`;

const SkillPercent = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
`;

const ProgressTrack = styled.div`
  height: 6px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.surfaceSubtle};
  overflow: hidden;
`;

const ProgressFill = styled.div<{ $percent: number }>`
  height: 100%;
  width: ${({ $percent }) => $percent}%;
  border-radius: 999px;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.accent}, #8b5cf6);
  animation: ${fillBar} 1s ease-out;
  transition: width 600ms ease;
`;

const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Tools'] as const;

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'All') return skills;
    return skills.filter((s: Skill) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <Section id="skills">
      <Container>
        <SectionHeader>
          <Kicker>My Expertise</Kicker>
          <SectionTitle>Skills & Technologies</SectionTitle>
          <SectionDescription>
            Technologies and tools I work with to bring ideas to life. From programming languages
            to frameworks and developer tools.
          </SectionDescription>
        </SectionHeader>

        <CategoryTabs>
          {categories.map((cat) => (
            <Tab
              key={cat}
              $active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Tab>
          ))}
        </CategoryTabs>

        <SkillsGrid>
          {filteredSkills.map((skill, idx) => (
            <SkillCard key={skill.name} style={{ animationDelay: `${idx * 0.06}s` }}>
              <SkillTop>
                <SkillInfo>
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                </SkillInfo>
                <SkillPercent>{skill.proficiency}%</SkillPercent>
              </SkillTop>
              <ProgressTrack>
                <ProgressFill $percent={skill.proficiency} />
              </ProgressTrack>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </Section>
  );
}
