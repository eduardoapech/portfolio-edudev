import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledNavLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-weight: 500;
  border-bottom: 2px solid ${({ theme, isActive }) => (isActive ? theme.colors.white : theme.colors.transparent)};
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.white};
  }
`

