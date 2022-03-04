import * as S from './styles'

export type BadgeProps = {
  title: string
  color?: 'red' | 'white'
}

const Badge = ({ title, color = 'red' }: BadgeProps) => (
  <S.Wrapper color={color}>{title}</S.Wrapper>
)

export default Badge
