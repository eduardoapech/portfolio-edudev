import styled from 'styled-components'

export const StyledTag = styled.span`
  background: rgba(0, 0, 0, 0.6);
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 234, 255, 0.2);
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`

