import Gallery, { GalleryProps } from 'components/Gallery'
import Logo from 'components/Logo'
import PlayerBanner, { PlayerBannerProps } from 'components/PlayerBanner'
import PlayerInfo, { PlayerInfoProps } from 'components/PlayerInfo'
import { BrandData } from 'components/Sponsors'
import Base from 'templates/Base'

import * as S from './styles'

export type JogadorTemplateProps = {
  banner: PlayerBannerProps
  info: PlayerInfoProps
  gallery: GalleryProps
  sponsorsItems: BrandData[]
}

const Jogador = ({
  banner,
  info,
  gallery,
  sponsorsItems
}: JogadorTemplateProps) => (
  <Base sponsorsItems={sponsorsItems}>
    <PlayerBanner {...banner} />
    <S.PlayerInfoSection>
      <PlayerInfo {...info} />
      <S.LogoArea>
        <Logo color="black" />
      </S.LogoArea>
    </S.PlayerInfoSection>
    <Gallery {...gallery} />
  </Base>
)

export default Jogador
