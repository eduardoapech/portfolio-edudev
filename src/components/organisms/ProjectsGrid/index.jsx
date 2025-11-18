import { StyledPortfolioSection, StyledInterface, StyledGrid } from './styles'
import ProjectCard from '../../molecules/ProjectCard'

const ProjectsGrid = ({ projects = [] }) => {
  return (
    <StyledPortfolioSection>
      <StyledInterface>
        <h1></h1>
        <StyledGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </StyledGrid>
      </StyledInterface>
    </StyledPortfolioSection>
  )
}

export default ProjectsGrid

