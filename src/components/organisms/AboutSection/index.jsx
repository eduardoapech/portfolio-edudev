import { StyledAboutSection, StyledAboutDetail, StyledDownloadSocial, StyledAboutImg, StyledImgBox } from './styles'
import Title from '../../atoms/Title'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'

const AboutSection = () => {
  return (
    <StyledAboutSection>
      <StyledAboutDetail>
        <Title size="2xl" marginBottom="20px">
          About Me
        </Title>
        <Text>Hello, my name is Eduardo, and I've been working with programming since 2022.</Text>
        <Text>
          I believe that technology can improve the way we connect and solve everyday problems. My work combines
          technical skills with a keen eye for customer needs, creating intuitive and efficient systems.
        </Text>
        <Text>
          Besides coding, I enjoy exploring new technologies and staying updated with market trends.
        </Text>
        <Text>
          If you're interested, I'd be happy to help with whatever you need. We can talk, exchange ideas, and make
          your system the best it can be.
        </Text>
        <Text>Get in touch!</Text>

        <StyledDownloadSocial>
          <Button href="/static/Desenvolvedor-Curriculo-atualizado.pdf" download>
            Download CV
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

