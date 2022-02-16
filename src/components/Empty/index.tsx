import Button from 'components/Button'
import Link from 'next/link'

import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <S.Error>404</S.Error>
    <S.Title>{title}</S.Title>
    <S.description>{description}</S.description>

    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Voltar a Página Inicial</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
