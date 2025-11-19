import { StyledText } from './styles'

const Text = ({ children, size, align, opacity, margin, maxWidth, dangerouslySetInnerHTML, ...props }) => {
  if (dangerouslySetInnerHTML) {
    return (
      <StyledText
        size={size}
        align={align}
        opacity={opacity}
        margin={margin}
        maxWidth={maxWidth}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        {...props}
      />
    )
  }

  return (
    <StyledText size={size} align={align} opacity={opacity} margin={margin} maxWidth={maxWidth} {...props}>
      {children}
    </StyledText>
  )
}

export default Text

