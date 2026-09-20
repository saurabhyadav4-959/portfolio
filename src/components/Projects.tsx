import { FiExternalLink, FiGithub } from 'react-icons/fi';
import styled, { keyframes } from 'styled-components';
import { projects } from '../data/portfolioData';

/* ─── Animations ─── */
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  transition: transform 300ms ease, border-color 300ms ease, box-shadow 300ms ease;
  animation: ${fadeInUp} 0.6s ease-out both;

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 16px 48px ${({ theme }) => theme.colors.accentGlow};
  }
`;

const CardGradient = styled.div<{ $gradient: string }>`
  height: 140px;
  background: ${({ $gradient }) => $gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 40%, ${({ theme }) => theme.colors.surfaceElevated});
  }
`;

const ProjectEmoji = styled.span`
  font-size: 3.5rem;
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
`;

const CardBody = styled.div`
  padding: 24px;
`;

const ProjectTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
  letter-spacing: -0.01em;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 18px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const Tag = styled.span`
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 0.74rem;
  font-weight: 600;
  font-family: 'JetBrains Mono', monospace;
  color: ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.colors.accentSoft};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const CardActions = styled.div`
  display: flex;
  gap: 12px;
`;

const ActionBtn = styled.a<{ $primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  border-radius: 10px;
  font-size: 0.82rem;
  font-weight: 600;
  transition: all 200ms ease;

  ${({ $primary, theme }) =>
    $primary
      ? `
        color: #fff;
        background: linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.accentStrong});
        box-shadow: 0 3px 12px ${theme.colors.accentGlow};

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px ${theme.colors.accentGlow};
        }
      `
      : `
        color: ${theme.colors.textMuted};
        background: ${theme.colors.surfaceSubtle};
        border: 1px solid ${theme.colors.border};

        &:hover {
          color: ${theme.colors.text};
          border-color: ${theme.colors.accent};
          transform: translateY(-2px);
        }
      `}
`;

export function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionHeader>
          <Kicker>My Work</Kicker>
          <SectionTitle>Featured Projects</SectionTitle>
          <SectionDescription>
            A collection of projects I've worked on, showcasing my skills in web development,
            problem solving, and software engineering.
          </SectionDescription>
        </SectionHeader>

        <ProjectsGrid>
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} style={{ animationDelay: `${idx * 0.1}s` }}>
              <CardGradient $gradient={project.gradient}>
                <ProjectEmoji>{project.icon}</ProjectEmoji>
              </CardGradient>

              <CardBody>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>

                <TechTags>
                  {project.techStack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </TechTags>

                <CardActions>
                  <ActionBtn
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size={15} />
                    <span>Source Code</span>
                  </ActionBtn>
                  {project.liveUrl && (
                    <ActionBtn
                      $primary
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink size={15} />
                      <span>Live Demo</span>
                    </ActionBtn>
                  )}
                </CardActions>
              </CardBody>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </Section>
  );
}
