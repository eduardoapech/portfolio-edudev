import styled from 'styled-components'

export const StyledProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const StyledProjectContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  min-height: 200px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`

export const StyledProjectLink = styled.a`
  text-decoration: none;
  color: inherit;
`

export const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 350px;
  width: 100%;
  height: 100%;
`

