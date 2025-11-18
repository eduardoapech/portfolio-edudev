import { StyledIconLink } from './styles'

const IconLink = ({ href, title, iconClass, target = '_blank', rel = 'noopener noreferrer', ...props }) => {
  return (
    <StyledIconLink href={href} target={target} rel={rel} title={title} {...props}>
      <i className={iconClass}></i>
    </StyledIconLink>
  )
}

export default IconLink

