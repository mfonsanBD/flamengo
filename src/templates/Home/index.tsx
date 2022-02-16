import Menu from 'components/Menu'
import Banner, { BannerImageProps } from 'components/Banner'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Sponsors, { BrandData } from 'components/Sponsors'
import TrophyArea from 'components/TrophyArea'
import MatchCardSlider from 'components/MatchCardSlider'

import * as S from './styles'
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'

import { MatchCardProps } from 'components/MatchCard'
import { TrophyProps } from 'components/Trophy'
import MainNews, { MainNewsProps } from 'components/MainNews'
import NewsCard, { NewsCardProps } from 'components/NewsCard'
import Button from 'components/Button'
import { Grid } from 'components/Grid'

export type HomeTemplateProps = {
  bannerItems: BannerImageProps[]
  matchItems: MatchCardProps[]
  trophysItems: TrophyProps[]
  mainNews: MainNewsProps
  newsItems: NewsCardProps[]
  flaTVNews: MainNewsProps
  flaTVItems: NewsCardProps[]
  sponsorsItems: BrandData[]
}

const Home = ({
  bannerItems,
  matchItems,
  trophysItems,
  mainNews,
  newsItems,
  sponsorsItems
}: HomeTemplateProps) => {
  return (
    <S.Wrapper>
      <S.MenuSection>
        <Menu />
      </S.MenuSection>

      <S.BannerSection>
        <Banner items={bannerItems} />
      </S.BannerSection>

      <S.MatchsSection>
        <Heading firstTitle="Próximos" secondTitle="Jogos" />
        <MatchCardSlider items={matchItems} />
      </S.MatchsSection>

      <TrophyArea items={trophysItems} />

      <S.NewsSection>
        <Heading firstTitle="Últimas" secondTitle="Notícias" />
        <S.AllNews>
          <MainNews cover={mainNews.cover} title={mainNews.title} />
          <Grid>
            {newsItems.map((item, index) => (
              <NewsCard
                cover={item.cover}
                description={item.description}
                title={item.title}
                date={item.date}
                key={index}
              />
            ))}
          </Grid>
        </S.AllNews>

        <S.ButtonArea>
          <Button
            minimal
            color="default"
            side="right"
            size="small"
            icon={<ArrowRight />}
            as="a"
            href="/noticias"
          >
            Ver Todas as Notícias
          </Button>
        </S.ButtonArea>
      </S.NewsSection>

      <S.FlaTVSection>
        <S.FlaTVLogo src="/img/fla-tv-branco.png" alt="FlaTV" />
        <MainNews
          cover={mainNews.cover}
          title={mainNews.title}
          mode="horizontal"
          hasBadge
        />
        <Grid>
          {newsItems.map((item, index) => (
            <NewsCard
              cover={item.cover}
              description={item.description}
              title={item.title}
              date={item.date}
              key={index}
            />
          ))}
        </Grid>

        <S.ButtonArea>
          <Button
            minimal
            color="white"
            side="right"
            size="small"
            icon={<ArrowRight />}
            as="a"
            href="/fla-tv"
          >
            Ver Todos os Epsódios
          </Button>
        </S.ButtonArea>
      </S.FlaTVSection>

      <S.SponsorsSection>
        <Sponsors item={sponsorsItems} />
      </S.SponsorsSection>

      <S.FooterSection>
        <Footer />
      </S.FooterSection>
    </S.Wrapper>
  )
}

export default Home
