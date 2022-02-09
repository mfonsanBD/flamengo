import Home, { HomeTemplateProps } from 'templates/Home'

import bannerItems from 'components/Banner/mock'
import matchItems from 'components/MatchCardSlider/mock'
import trophysItems from 'components/TrophyArea/mock'
import newsItems from 'components/NewsCard/mock'
import sponsorsItems from 'components/Sponsors/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  return {
    revalidate: 10,
    props: {
      bannerItems,
      matchItems,
      trophysItems,
      mainNews: newsItems[0],
      newsItems: newsItems.slice(1, 7),
      sponsorsItems
    }
  }
}
