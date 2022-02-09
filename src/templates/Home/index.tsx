import Menu from 'components/Menu'
import Banner, { BannerImageProps } from 'components/Banner'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Sponsors, { BrandData } from 'components/Sponsors'
import TrophyArea from 'components/TrophyArea'
import MatchCardSlider from 'components/MatchCardSlider'

import * as S from './styles'
import { MatchCardProps } from 'components/MatchCard'
import { TrophyProps } from 'components/Trophy'

export type HomeTemplateProps = {
  bannerItems: BannerImageProps[]
  matchItems: MatchCardProps[]
  trophysItems: TrophyProps[]
  sponsorsItems: BrandData[]
}

const Home = ({
  bannerItems,
  matchItems,
  trophysItems,
  sponsorsItems
}: HomeTemplateProps) => (
  <S.Wrapper>
    <S.MenuSection>
      <Menu />
    </S.MenuSection>

    <S.BannerSection>
      <Banner items={bannerItems} />
    </S.BannerSection>

    <S.MatchsSection>
      <Heading firstTitle="Próximos " secondTitle="Jogos" />
      <MatchCardSlider items={matchItems} />
    </S.MatchsSection>

    <TrophyArea items={trophysItems} />

    <S.SponsorsSection>
      <Sponsors item={sponsorsItems} />
    </S.SponsorsSection>

    <S.FooterSection>
      <Footer />
    </S.FooterSection>
  </S.Wrapper>
)

export default Home
