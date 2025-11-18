import styled from 'styled-components'

export const StyledButton = styled.a`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  font-weight: 500;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.transparent};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.white};
  }
`

