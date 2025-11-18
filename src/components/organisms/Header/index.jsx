import { useLocation } from 'react-router-dom'
import { StyledHeader, StyledNavbar } from './styles'
import Logo from '../../atoms/Logo'
import NavLink from '../../molecules/NavLink'

const Header = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
  ]

  return (
    <StyledHeader>
      <Logo to="/" />
      <StyledNavbar>
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} isActive={location.pathname === item.path}>
            {item.label}
          </NavLink>
        ))}
      </StyledNavbar>
    </StyledHeader>
  )
}

export default Header

