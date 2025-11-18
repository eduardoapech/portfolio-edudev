import { forwardRef } from 'react'
import { StyledTitle } from './styles'

const Title = forwardRef(({ children, size = '2xl', marginBottom, minHeight, ...props }, ref) => {
  return (
    <StyledTitle ref={ref} size={size} marginBottom={marginBottom} minHeight={minHeight} {...props}>
      {children}
    </StyledTitle>
  )
})

Title.displayName = 'Title'

export default Title

