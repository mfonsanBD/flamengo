import * as S from './styles'

export type PlayerDataProps = {
  fullName: string
  birthday: string
  nationality: string
  city: string
  foot: string
  since: string
}

const PlayerData = ({
  fullName,
  birthday,
  nationality,
  city,
  foot,
  since
}: PlayerDataProps) => (
  <S.Wrapper>
    <S.Data>
      <p>Nome</p>
      <p>Nascimento</p>
      <p>Nacionalidade</p>
      <p>Natural de</p>
      <p>Pé Dominante</p>
      <p>Assinado desde</p>
    </S.Data>

    <S.Info>
      <h4>{fullName}</h4>
      <h4>{birthday}</h4>
      <h4>{nationality}</h4>
      <h4>{city}</h4>
      <h4>{foot}</h4>
      <h4>{since}</h4>
    </S.Info>
  </S.Wrapper>
)

export default PlayerData
