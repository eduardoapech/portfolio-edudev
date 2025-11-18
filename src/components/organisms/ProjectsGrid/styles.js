import styled from 'styled-components'

export const StyledPortfolioSection = styled.section`
  padding: 80px 4%;
  box-shadow: ${({ theme }) => theme.shadows.xl};
`

export const StyledInterface = styled.div`
  width: 100%;
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

