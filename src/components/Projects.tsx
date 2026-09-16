import styled from 'styled-components';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

const Section = styled.section`
  padding: 110px 0;
`;

const Inner = styled.div`
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 24px;
  margin-bottom: 44px;

  @media (max-width: 650px) {
    align-items: start;
    flex-direction: column;
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

const Note = styled.p`
  max-width: 390px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  font-size: 0.92rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export function Projects() {
  return (
    <Section id="projects">
      <Inner>
        <Header>
          <div>
            <Kicker>Selected work</Kicker>
            <Title>Projects built while learning.</Title>
          </div>
          <Note>
            A selection of hands-on projects that reflect experimentation with React,
            backend tools, state, performance, and practical application development.
          </Note>
        </Header>
        <Grid>
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </Grid>
      </Inner>
    </Section>
  );
}