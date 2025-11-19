import { useRef, useState, useEffect } from 'react'
import { StyledHeroSection, StyledHeroDetail, StyledSubtitle, StyledSocialIcons } from './styles'
import Title from '../../atoms/Title'
import SocialLink from '../../molecules/SocialLink'
import { useTypeEffect } from '../../../hooks/useTypeEffect'
import { useLanguage } from '../../../contexts/LanguageContext'
import { getTranslation } from '../../../locales'

const HeroSection = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const [startSubtitle, setStartSubtitle] = useState(false)
  const { language } = useLanguage()
  const t = (key) => getTranslation(language, key)

  const heroTitle = t('hero.title')
  const heroSubtitle = t('hero.subtitle')

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.innerText = ''
      setStartSubtitle(false)
    }
  }, [language])

  useTypeEffect(titleRef, heroTitle, 100, () => {
    setTimeout(() => {
      setStartSubtitle(true)
    }, 300)
  })

  useTypeEffect(subtitleRef, startSubtitle ? heroSubtitle : '', 100)

  const technologies = [
    { title: 'Java', iconClass: 'ri-java-fill' },
    { title: 'Spring Boot', iconClass: 'ri-leaf-fill' },
    { title: 'PostgreSQL', iconClass: 'ri-database-2-fill' },
    { title: 'REST API', iconClass: 'ri-code-s-slash-line' },
    { title: 'JWT Security', iconClass: 'ri-shield-check-line' },
    { title: 'Git/GitHub', iconClass: 'ri-git-branch-line' },
  ]

  return (
    <StyledHeroSection>
      <StyledHeroDetail>
        <Title ref={titleRef} minHeight="60px" id="titulo-principal" />
        <StyledSubtitle ref={subtitleRef} id="subtitulo" />
        <StyledSocialIcons>
          {technologies.map((tech) => (
            <SocialLink key={tech.title} title={tech.title} iconClass={tech.iconClass} />
          ))}
        </StyledSocialIcons>
      </StyledHeroDetail>
    </StyledHeroSection>
  )
}

export default HeroSection

