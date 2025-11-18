import styled from 'styled-components'

export const StyledIcon = styled.i`
  font-size: ${({ theme, size }) => size || theme.spacing.md};
  color: ${({ theme, color }) => color || theme.colors.white};
  opacity: ${({ opacity }) => opacity || 1};
  transition: 0.3s ease;
`

