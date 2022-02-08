import Menu from 'components/Menu'
import Banner from 'components/Banner'
import Heading from 'components/Heading'
import Sponsors from 'components/Sponsors'
import TrophyArea from 'components/TrophyArea'
import MatchCardSlider from 'components/MatchCardSlider'

import * as S from './styles'

import bannerItems from 'components/Banner/mock'
import matchItems from 'components/MatchCardSlider/mock'
import trophysItems from 'components/TrophyArea/mock'
import sponsorsItems from 'components/Sponsors/mock'
import Footer from 'components/Footer'

const Home = () => (
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
