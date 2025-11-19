import styled from 'styled-components'

export const StyledPortfolioSection = styled.section`
  padding: 80px 4%;
  box-shadow: ${({ theme }) => theme.shadows.xl};
`

export const StyledInterface = styled.div`
  width: 100%;
`

export const StyledProjectsTitle = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

export const StyledCategoryFilters = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;

  button {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
    transition: all 0.3s ease;
    text-transform: uppercase;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: ${({ theme }) => theme.colors.accent};
      transform: translateY(-2px);
    }

    &.active {
      background: ${({ theme }) => theme.colors.accent};
      border-color: ${({ theme }) => theme.colors.accent};
      box-shadow: ${({ theme }) => theme.shadows.glow};
      font-weight: 600;
    }
  }
`

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 40px;
  margin-top: 60px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

