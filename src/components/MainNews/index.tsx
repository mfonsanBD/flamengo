import Button from 'components/Button'

import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'

import * as S from './styles'

export type MainNewsProps = {
  cover: string
  title: string
  mode?: 'vertical' | 'horizontal'
  hasBadge?: boolean
}

const MainNews = ({
  cover,
  title,
  mode = 'vertical',
  hasBadge = false
}: MainNewsProps) => (
  <S.Wrapper mode={mode}>
    <S.Cover cover={cover} role="image" aria-label="cover" />

    <S.Content>
      {hasBadge && <S.Badge>Time Principal</S.Badge>}
      <S.Title>{title}</S.Title>

      <Button size="small" side="right" icon={<ArrowRight />}>
        Ver mais
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default MainNews
