import { StyledTagsList } from './styles'
import Tag from '../../atoms/Tag'

const TagsList = ({ tags = [], align, alignMobile, ...props }) => {
  return (
    <StyledTagsList align={align} alignMobile={alignMobile} {...props}>
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </StyledTagsList>
  )
}

export default TagsList

