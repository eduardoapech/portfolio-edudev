import styled from 'styled-components'

export const StyledIconLink = styled.a`
  text-decoration: none;

  i {
    font-size: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.8;
    transition: 0.3s ease;
  }

  &:hover i {
    opacity: 1;
    color: ${({ theme }) => theme.colors.accent};
  }
`

