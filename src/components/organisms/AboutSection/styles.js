import styled from 'styled-components'

export const StyledAboutSection = styled.section`
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`

export const StyledAboutDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
`

export const StyledDownloadSocial = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
`

export const StyledAboutImg = styled.div`
  margin-left: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 0;
    margin-top: ${({ theme }) => theme.spacing.lg};
  }
`

export const StyledImgBox = styled.div`
  position: relative;
  width: 28vw;
  height: 28vw;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 50vw;
    height: 50vw;
  }

  img {
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

