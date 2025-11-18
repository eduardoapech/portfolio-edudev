import { StyledText } from './styles'

const Text = ({ children, size, align, opacity, margin, maxWidth, ...props }) => {
  return (
    <StyledText
      size={size}
      align={align}
      opacity={opacity}
      margin={margin}
      maxWidth={maxWidth}
      {...props}
    >
      {children}
    </StyledText>
  )
}

export default Text

