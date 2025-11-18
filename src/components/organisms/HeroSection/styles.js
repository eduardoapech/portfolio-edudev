import styled from 'styled-components'

export const StyledHeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl} 5% 0;
  color: ${({ theme }) => theme.colors.white};
  animation-delay: 1.5s;
  text-align: center;
  transform: translateY(30px);
  opacity: 0;
  animation: ${({ theme }) => theme.animations.slideIn};
  animation-delay: 1s;
`

export const StyledHeroDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledSubtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  min-height: 40px;
  margin-top: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.white};
`

export const StyledSocialIcons = styled.div`
  margin-left: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  display: flex;
  gap: 8px;
`

