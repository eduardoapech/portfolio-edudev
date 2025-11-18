import { StyledLogo } from './styles'

const Logo = ({ to = '/', ...props }) => {
  return <StyledLogo to={to} {...props}></StyledLogo>
}

export default Logo

