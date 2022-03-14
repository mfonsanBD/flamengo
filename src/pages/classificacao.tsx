import classificacaoMock from 'components/ClassificationTable/mock'
import optionsMock from 'components/Select/mock'
import sponsorsItems from 'components/Sponsors/mock'
import Classificacao, {
  ClassificacaoTemplateProps
} from 'templates/Classificacao'

export default function Index(props: ClassificacaoTemplateProps) {
  return <Classificacao {...props} />
}

export async function getStaticProps() {
  return {
    revalidate: 10,
    props: {
      options: optionsMock,
      items: classificacaoMock,
      sponsorsItems
    }
  }
}
