import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg} 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  transform: translateY(30px);
  opacity: 0;
  animation: ${({ theme }) => theme.animations.slideIn};
  animation-delay: 1s;
`

export const StyledHeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`

export const StyledNavbar = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`

