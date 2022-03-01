import Link from 'next/link'
import * as S from './styles'

export type PlayerCardProps = {
  number: string
  name: string
  floatImage: string
  buttonLabel: string
  buttonLink: string
}

const PlayerCard = ({
  number,
  name,
  floatImage,
  buttonLabel,
  buttonLink
}: PlayerCardProps) => (
  <S.Wrapper>
    <S.PlayerNumber>{number}</S.PlayerNumber>

    <S.Overlay />
    <S.Overlay />
    <S.PlayerImage src={floatImage} />

    <S.PlayerName>{name}</S.PlayerName>

    <Link href={buttonLink} passHref>
      <a>
        <S.PlayerButton>{buttonLabel}</S.PlayerButton>
      </a>
    </Link>
  </S.Wrapper>
)

export default PlayerCard
