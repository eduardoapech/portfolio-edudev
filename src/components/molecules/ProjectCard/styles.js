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
  background: rgba(255, 255, 255, 0.05);
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  min-height: 200px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

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

export const StyledProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: center;
  }
`

