import styled from 'styled-components'

export const StyledTitle = styled.h1`
  font-size: ${({ theme, size }) => theme.fontSizes[size] || theme.fontSizes['2xl']};
  line-height: 1;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme, marginBottom }) => marginBottom || '0'};
  min-height: ${({ minHeight }) => minHeight || 'auto'};
`

