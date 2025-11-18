import styled from 'styled-components'

export const StyledProjectImage = styled.div`
  width: 100%;
  max-width: 310px;
  aspect-ratio: 16 / 10;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({ image }) => image});
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  min-height: 180px;
  min-width: 300px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-position: center;
  }
`

