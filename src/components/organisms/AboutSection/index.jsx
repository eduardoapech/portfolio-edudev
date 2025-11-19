import { StyledAboutSection, StyledAboutDetail, StyledDownloadSocial, StyledAboutImg, StyledImgBox } from './styles'
import Title from '../../atoms/Title'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'
import { useLanguage } from '../../../contexts/LanguageContext'
import { getTranslation } from '../../../locales'

const AboutSection = () => {
  const { language } = useLanguage()
  const t = (key) => getTranslation(language, key)

  return (
    <StyledAboutSection>
      <StyledAboutDetail>
        <Title size="2xl" marginBottom="20px">
          {t('about.title')}
        </Title>
        <Text dangerouslySetInnerHTML={{ __html: t('about.paragraph1') }} />
        <Text dangerouslySetInnerHTML={{ __html: t('about.paragraph2') }} />
        <Text dangerouslySetInnerHTML={{ __html: t('about.paragraph3') }} />
        <Text dangerouslySetInnerHTML={{ __html: t('about.paragraph4') }} />
        <Text dangerouslySetInnerHTML={{ __html: t('about.paragraph5') }} />

        <StyledDownloadSocial>
          <Button href="/static/Desenvolvedor-Curriculo-atualizado.pdf" download>
            {t('about.downloadCV')}
          </Button>
        </StyledDownloadSocial>
      </StyledAboutDetail>

      <StyledAboutImg>
        <StyledImgBox>
          <img src="/assets/home.jpg" alt="Eduardo" />
        </StyledImgBox>
      </StyledAboutImg>
    </StyledAboutSection>
  )
}

export default AboutSection

