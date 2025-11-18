import styled from 'styled-components'

export const StyledTagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: ${({ theme }) => theme.spacing.xs};
  justify-content: ${({ align }) => align || 'flex-start'};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: ${({ alignMobile }) => alignMobile || 'center'};
  }
`

