import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  color?: 'default' | 'white'
  fullWidth?: boolean
  minimal?: boolean
  side?: 'left' | 'right' | undefined
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    size = 'medium',
    color,
    fullWidth = false,
    minimal = false,
    side,
    icon,
    ...props
  },
  ref
) => (
  <S.Wrapper
    size={size}
    color={color}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    side={side}
    ref={ref}
    {...props}
  >
    {!!icon && side == 'left' && icon}
    {!!children && <span>{children}</span>}
    {!!icon && side == 'right' && icon}
  </S.Wrapper>
)

export default forwardRef(Button)
