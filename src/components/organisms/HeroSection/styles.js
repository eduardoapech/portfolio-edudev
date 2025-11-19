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
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(0, 234, 255, 0.1) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`

export const StyledHeroDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledSubtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  min-height: 50px;
  margin-top: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  opacity: 0.9;
`

export const StyledSocialIcons = styled.div`
  margin-left: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  max-width: 600px;
`

