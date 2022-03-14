import ClassificationTable, {
  ClassificationTableProps
} from 'components/ClassificationTable'
import Select from 'components/Select'
import { BrandData } from 'components/Sponsors'
import Base from 'templates/Base'
import * as S from './styles'

export type ClassificacaoTemplateProps = {
  options: string[]
  items: ClassificationTableProps
  sponsorsItems: BrandData[]
}

const Classificacao = ({
  options,
  items,
  sponsorsItems
}: ClassificacaoTemplateProps) => (
  <Base sponsorsItems={sponsorsItems}>
    <S.Wrapper>
      <Select campeonatos={options} />
      <ClassificationTable {...items} />
    </S.Wrapper>
  </Base>
)

export default Classificacao
