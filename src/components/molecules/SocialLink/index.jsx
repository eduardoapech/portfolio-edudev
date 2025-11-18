import { StyledSocialLink } from './styles'

const SocialLink = ({ title, iconClass, children, ...props }) => {
  return (
    <StyledSocialLink title={title} {...props}>
      <i className={iconClass}></i>
      {children}
    </StyledSocialLink>
  )
}

export default SocialLink

