import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle'
import { theme } from './styles/theme'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/organisms/Header'
import Footer from './components/organisms/Footer'
import HomePage from './templates/HomePage'
import AboutPage from './templates/AboutPage'
import ProjectsPage from './templates/ProjectsPage'

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.glass};
  border: 2px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  backdrop-filter: blur(30px);
  transform: scale(0);
  animation: ${({ theme }) => theme.animations.zoomIn};
`

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Container>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
            <Footer />
          </Container>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
