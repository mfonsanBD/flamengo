import MediaMatch from 'components/MediaMatch'
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
  <>
    <MediaMatch greaterThan="medium">
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
    </MediaMatch>

    <MediaMatch lessThan="medium">
      <S.Data>
        <p>Nome:</p>
        <h4>{fullName}</h4>

        <p>Nascimento:</p>
        <h4>{birthday}</h4>

        <p>Nacionalidade:</p>
        <h4>{nationality}</h4>

        <p>Natural de:</p>
        <h4>{city}</h4>

        <p>Pé Dominante:</p>
        <h4>{foot}</h4>

        <p>Assinado desde:</p>
        <h4>{since}</h4>
      </S.Data>
    </MediaMatch>
  </>
)

export default PlayerData
