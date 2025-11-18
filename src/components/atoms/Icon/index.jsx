import { StyledIcon } from './styles'

const Icon = ({ className, size, color, opacity, ...props }) => {
  return <StyledIcon className={className} size={size} color={color} opacity={opacity} {...props} />
}

export default Icon

