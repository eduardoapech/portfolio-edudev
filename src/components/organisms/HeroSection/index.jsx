import { useRef, useState } from 'react'
import { StyledHeroSection, StyledHeroDetail, StyledSubtitle, StyledSocialIcons } from './styles'
import Title from '../../atoms/Title'
import SocialLink from '../../molecules/SocialLink'
import { useTypeEffect } from '../../../hooks/useTypeEffect'

const HeroSection = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const [startSubtitle, setStartSubtitle] = useState(false)

  useTypeEffect(titleRef, 'Welcome!', 100, () => {
    setTimeout(() => {
      setStartSubtitle(true)
    }, 300)
  })

  useTypeEffect(subtitleRef, startSubtitle ? "Nice to meet you, I'm Eduardo" : '', 100)

  const socialLinks = [
    { title: 'Java', iconClass: 'ri-java-fill' },
    { title: 'Spring Boot', iconClass: 'ri-leaf-fill' },
    { title: 'Database', iconClass: 'ri-database-2-fill' },
  ]

  return (
    <StyledHeroSection>
      <StyledHeroDetail>
        <Title ref={titleRef} minHeight="60px" id="titulo-principal" />
        <StyledSubtitle ref={subtitleRef} id="subtitulo" />
        <StyledSocialIcons>
          {socialLinks.map((link) => (
            <SocialLink key={link.title} title={link.title} iconClass={link.iconClass} />
          ))}
        </StyledSocialIcons>
      </StyledHeroDetail>
    </StyledHeroSection>
  )
}

export default HeroSection

