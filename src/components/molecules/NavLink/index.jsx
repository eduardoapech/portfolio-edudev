import { StyledNavLink } from './styles'

const NavLink = ({ to, children, isActive, ...props }) => {
  return (
    <StyledNavLink to={to} isActive={isActive} {...props}>
      {children}
    </StyledNavLink>
  )
}

export default NavLink

