import { StyledTag } from './styles'

const Tag = ({ children, ...props }) => {
  return <StyledTag {...props}>{children}</StyledTag>
}

export default Tag

