import styled from 'styled-components'

export const StyledSocialLink = styled.a`
  display: inline-flex;
  padding: 8px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    color: ${({ theme }) => theme.colors.black};
  }
`

