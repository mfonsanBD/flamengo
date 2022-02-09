import Button from 'components/Button'

import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'

import * as S from './styles'

export type MainNewsProps = {
  cover: string
  title: string
}

const MainNews = ({ cover, title }: MainNewsProps) => (
  <S.Wrapper>
    <S.Cover cover={cover} role="image" aria-label="cover" />

    <S.Content>
      <S.Title>{title}</S.Title>

      <Button size="small" side="right" icon={<ArrowRight />}>
        Ver mais
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default MainNews
