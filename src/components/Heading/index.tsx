import * as S from './styles'

export type HeadingProps = {
  firstTitle: string
  secondTitle?: string
}

const Heading = ({ firstTitle, secondTitle }: HeadingProps) => (
  <S.Wrapper>
    {firstTitle} <span>{secondTitle}</span>
  </S.Wrapper>
)

export default Heading
