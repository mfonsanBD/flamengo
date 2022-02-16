import Button from 'components/Button'

import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'

import * as S from './styles'

export type NewsCardProps = {
  title: string
  description: string
  date?: string
  cover: string
}

const NewsCard = ({ title, description, date, cover }: NewsCardProps) => (
  <S.Wrapper>
    <S.Cover cover={cover} role="image" aria-label="cover" />
    <S.Content>
      {!!date && (
        <S.Date>
          {new Intl.DateTimeFormat('pt-BR').format(new Date(date))}
        </S.Date>
      )}
      <S.Title>{title}</S.Title>
      <S.Desciption>{description}</S.Desciption>

      <Button size="small" side="right" icon={<ArrowRight />} as="a" href="/">
        Ver mais
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default NewsCard
