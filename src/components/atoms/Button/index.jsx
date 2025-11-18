import { StyledButton } from './styles'

const Button = ({ children, href, download, ...props }) => {
  return (
    <StyledButton href={href} download={download} {...props}>
      {children}
    </StyledButton>
  )
}

export default Button

