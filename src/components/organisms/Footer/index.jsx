import { StyledFooter, StyledFooterIcons } from './styles'
import IconLink from '../../molecules/IconLink'

const Footer = () => {
  const socialLinks = [
    {
      href: 'https://github.com/eduardoapech',
      title: 'GitHub',
      iconClass: 'ri-github-fill',
    },
    {
      href: 'https://www.linkedin.com/in/eduardo-augusto-pech-02272a50',
      title: 'LinkedIn',
      iconClass: 'ri-linkedin-fill',
    },
    {
      href: 'https://wa.me/55991864238',
      title: 'WhatsApp',
      iconClass: 'ri-whatsapp-line',
    },
  ]

  return (
    <StyledFooter>
      <StyledFooterIcons>
        {socialLinks.map((link) => (
          <IconLink
            key={link.href}
            href={link.href}
            title={link.title}
            iconClass={link.iconClass}
            target="_blank"
            rel="noopener noreferrer"
          />
        ))}
      </StyledFooterIcons>
    </StyledFooter>
  )
}

export default Footer

