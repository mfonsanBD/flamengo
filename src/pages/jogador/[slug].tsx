import { GetStaticProps } from 'next'

import Jogador, { JogadorTemplateProps } from 'templates/Jogador'

import sponsorsItems from 'components/Sponsors/mock'
import galleryMock from 'components/Gallery/mock'
import dataMock from 'components/PlayerData/mock'
import bannerMock from 'components/PlayerBanner/mock'
import statisticsMock from 'components/PlayerStatistics/mock'
import { useRouter } from 'next/dist/client/router'

export default function Index(props: JogadorTemplateProps) {
  const router = useRouter()
  if (router.isFallback) return null

  return <Jogador {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { slug: 'gabriel-barbosa' }
      }
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = () => {
  return {
    revalidate: 60,
    props: {
      banner: bannerMock,
      info: {
        statistics: statisticsMock,
        data: dataMock
      },
      gallery: galleryMock,
      sponsorsItems
    }
  }
}
