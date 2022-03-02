import Equipe, { EquipeTemplateProps } from 'templates/Equipe'

import mock from 'components/PlayerCardSlider/mock'
import sponsorsItems from 'components/Sponsors/mock'

export default function Index(props: EquipeTemplateProps) {
  return <Equipe {...props} />
}

export async function getStaticProps() {
  return {
    revalidate: 10,
    props: {
      goleiros: mock.slice(0, 2),
      zagueiros: mock.slice(0, 4),
      laterais: mock.slice(0, 6),
      meias: mock.slice(0, 6),
      atacantes: mock.slice(0, 6),
      sponsorsItems
    }
  }
}
