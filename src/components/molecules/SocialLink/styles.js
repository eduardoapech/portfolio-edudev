import styled from 'styled-components'

export const StyledSocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 8px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
    transform: translate(-50%, -50%);
    transition: width 0.3s ease, height 0.3s ease;
  }

  i {
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.glow};
    transform: translateY(-3px);

    &::before {
      width: 100%;
      height: 100%;
    }

    i {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`

