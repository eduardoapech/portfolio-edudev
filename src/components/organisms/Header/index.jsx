import { useLocation } from 'react-router-dom'
import { StyledHeader, StyledNavbar, StyledHeaderActions } from './styles'
import Logo from '../../atoms/Logo'
import NavLink from '../../molecules/NavLink'
import LanguageSelector from '../../molecules/LanguageSelector'
import { useLanguage } from '../../../contexts/LanguageContext'
import { getTranslation } from '../../../locales'

const Header = () => {
  const location = useLocation()
  const { language } = useLanguage()
  const t = (key) => getTranslation(language, key)

  const navItems = [
    { path: '/', key: 'nav.home' },
    { path: '/about', key: 'nav.about' },
    { path: '/projects', key: 'nav.projects' },
  ]

  return (
    <StyledHeader>
      <Logo to="/" />
      <StyledHeaderActions>
        <StyledNavbar>
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} isActive={location.pathname === item.path}>
              {t(item.key)}
            </NavLink>
          ))}
        </StyledNavbar>
        <LanguageSelector />
      </StyledHeaderActions>
    </StyledHeader>
  )
}

export default Header

