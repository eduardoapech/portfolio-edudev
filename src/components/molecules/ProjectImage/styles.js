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
  transition: all 0.5s ease;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  &::after {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.sm};
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`

