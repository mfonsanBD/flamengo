import * as S from './styles'

export type BadgeProps = {
  title: string
}

const Badge = ({ title }: BadgeProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)

export default Badge
