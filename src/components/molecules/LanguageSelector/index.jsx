import { StyledLanguageSelector, StyledLanguageButton } from './styles'
import { useLanguage } from '../../../contexts/LanguageContext'

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage()

  const languages = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
  ]

  return (
    <StyledLanguageSelector>
      {languages.map((lang) => (
        <StyledLanguageButton
          key={lang.code}
          className={language === lang.code ? 'active' : ''}
          onClick={() => changeLanguage(lang.code)}
          title={lang.code === 'pt' ? 'Português' : lang.code === 'en' ? 'English' : 'Español'}
        >
          {lang.label}
        </StyledLanguageButton>
      ))}
    </StyledLanguageSelector>
  )
}

export default LanguageSelector

