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
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::after {
    content: ' 📄';
    display: inline-block;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.transparent};
    box-shadow: ${({ theme }) => theme.shadows.glow};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.accent};

    &::after {
      transform: rotate(15deg) scale(1.2);
    }
  }

  &:active {
    transform: translateY(0);
  }
`

