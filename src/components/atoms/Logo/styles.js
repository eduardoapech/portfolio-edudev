import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLogo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-weight: 600;
`

