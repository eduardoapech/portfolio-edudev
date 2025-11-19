import { StyledProjectCard, StyledProjectContent, StyledProjectLink, StyledDescriptionContainer, StyledProjectTitle } from './styles'
import ProjectImage from '../ProjectImage'
import Text from '../../atoms/Text'
import TagsList from '../TagsList'
import { useLanguage } from '../../../contexts/LanguageContext'
import { getTranslation } from '../../../locales'

const ProjectCard = ({ project }) => {
  const { language } = useLanguage()
  const t = (key) => getTranslation(language, key)

  const title = project.titleKey ? t(project.titleKey) : project.title
  const description = project.descriptionKey ? t(project.descriptionKey) : project.description

  return (
    <StyledProjectCard>
      <StyledProjectContent>
        <StyledProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
          <ProjectImage image={project.image} />
        </StyledProjectLink>
        <StyledDescriptionContainer>
          <StyledProjectTitle>{title}</StyledProjectTitle>
          <Text size="sm" opacity={0.9} align="left" alignMobile="center">
            {description}
          </Text>
          <TagsList tags={project.tags} alignMobile="center" />
        </StyledDescriptionContainer>
      </StyledProjectContent>
    </StyledProjectCard>
  )
}

export default ProjectCard

