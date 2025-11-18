import { StyledProjectImage } from './styles'

const ProjectImage = ({ image, ...props }) => {
  return <StyledProjectImage image={image} {...props} />
}

export default ProjectImage

