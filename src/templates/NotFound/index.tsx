import Empty from 'components/Empty'
import * as S from './styles'

const NotFound = () => (
  <S.Wrapper>
    <Empty
      title="Página não encontrada"
      description="Não encontramos a página que você está tentando acessar."
      hasLink
    />
  </S.Wrapper>
)

export default NotFound
