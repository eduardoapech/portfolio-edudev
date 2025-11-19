import { StyledProjectImage } from './styles'
import { useLanguage } from '../../../contexts/LanguageContext'
import { getTranslation } from '../../../locales'

const ProjectImage = ({ image, ...props }) => {
  const { language } = useLanguage()
  const t = (key) => getTranslation(language, key)
  const seeOnGitHub = t('projects.seeOnGitHub')

  return <StyledProjectImage image={image} data-text={`🔗 ${seeOnGitHub}`} {...props} />
}

export default ProjectImage

