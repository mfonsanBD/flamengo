import * as S from './styles'

export type TrophyProps = {
  trophy: string
  trophySize: string
  nameTop: string
  nameBottom: string
  wins: number
}

const Trophy = ({
  trophy,
  trophySize,
  nameTop,
  nameBottom,
  wins
}: TrophyProps) => (
  <S.Wrapper>
    <S.Trophy src={trophy} alt={nameTop} role="image" trophySize={trophySize} />
    <S.Content>
      <S.Wins>{wins}</S.Wins>
      <S.Name>{nameTop}</S.Name>
      <S.Name>{nameBottom}</S.Name>
    </S.Content>
  </S.Wrapper>
)

export default Trophy
