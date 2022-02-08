import Link from 'next/link'
import { MinusOutline } from '@styled-icons/evaicons-outline/MinusOutline'
import * as S from './styles'

export type BreadcrumbProps = {
  home: string
  subpage?: string
  subpageLink?: string
  title: string
}

const Breadcrumb = ({
  home,
  title,
  subpage,
  subpageLink = '/sub'
}: BreadcrumbProps) => (
  <S.Wrapper>
    <S.Links>
      <Link href="/" passHref>
        <a>{home}</a>
      </Link>
      {!!subpage && (
        <>
          <MinusOutline size={20} />
          <Link href={subpageLink} passHref>
            <a>{subpage}</a>
          </Link>
        </>
      )}
      <MinusOutline size={20} />
      {title}
    </S.Links>
  </S.Wrapper>
)

export default Breadcrumb
