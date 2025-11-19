import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.fonts.primary};
  }

  body {
    min-height: 100vh;
    background: url("/background.jpg") no-repeat center / cover;
    background-attachment: fixed;
    padding: ${theme.spacing.xl} 5%;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }

  @keyframes zoom-in {
    100% {
      transform: scale(1);
    }
  }

  @keyframes slide-in {
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

