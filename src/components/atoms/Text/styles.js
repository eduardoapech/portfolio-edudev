import styled from 'styled-components'

export const StyledText = styled.p`
  font-size: ${({ theme, size }) => theme.fontSizes[size] || theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.5;
  opacity: ${({ opacity }) => opacity || 1};
  text-align: ${({ align }) => align || 'left'};
  margin: ${({ theme, margin }) => margin || `${theme.spacing.sm} 0 ${theme.spacing.md}`};
  max-width: ${({ maxWidth }) => maxWidth || 'none'};
`

