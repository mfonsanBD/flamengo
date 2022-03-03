import * as S from './styles'

export type PlayerBannerProps = {
  floatImage: string
  apelido: string
}

const PlayerBanner = ({ floatImage, apelido }: PlayerBannerProps) => (
  <S.Wrapper>
    <S.Overlay />
    <S.Overlay />
    <S.Apelido>{apelido}</S.Apelido>
    <S.Imagem src={floatImage} aria-label="jogador" />
  </S.Wrapper>
)

export default PlayerBanner
