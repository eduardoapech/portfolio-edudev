import styled from 'styled-components'

export const StyledLanguageSelector = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`

export const StyledLanguageButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }

  &.active {
    background: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`

