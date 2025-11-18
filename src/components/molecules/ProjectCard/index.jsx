import { StyledProjectCard, StyledProjectContent, StyledProjectLink, StyledDescriptionContainer } from './styles'
import ProjectImage from '../ProjectImage'
import Text from '../../atoms/Text'
import TagsList from '../TagsList'

const ProjectCard = ({ project }) => {
  return (
    <StyledProjectCard>
      <StyledProjectContent>
        <StyledProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
          <ProjectImage image={project.image} />
        </StyledProjectLink>
        <StyledDescriptionContainer>
          <Text size="sm" opacity={0.9} align="left" alignMobile="center">
            {project.description}
          </Text>
          <TagsList tags={project.tags} alignMobile="center" />
        </StyledDescriptionContainer>
      </StyledProjectContent>
    </StyledProjectCard>
  )
}

export default ProjectCard

