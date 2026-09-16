import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import styled from 'styled-components';
import type { ProjectCardProps } from '../types';

const Card = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 330px;
  padding: 22px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  transition: transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease;

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 22px 55px ${({ theme }) => theme.colors.shadow};
  }
`;

const Icon = styled.div`
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.colors.accentSoft};
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
`;

const Title = styled.h3`
  margin: 22px 0 10px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.35rem;
`;

const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 20px;
`;

const Tag = styled.span`
  padding: 6px 9px;
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.72rem;
  font-weight: 700;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
  padding-top: 26px;
`;

const Action = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 11px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.8rem;
  font-weight: 700;
  transition: border-color 180ms ease, color 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <Icon aria-hidden="true">{project.icon}</Icon>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
      <Tags>
        {project.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}
      </Tags>
      <Actions>
        <Action href={project.githubUrl} aria-label={`${project.title} GitHub placeholder`}>
          <FiGithub /> GitHub
        </Action>
        {project.liveUrl && (
          <Action href={project.liveUrl}>
            <FiArrowUpRight /> Live Demo
          </Action>
        )}
      </Actions>
    </Card>
  );
}