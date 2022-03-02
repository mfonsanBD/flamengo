import Menu from 'components/Menu'
import Footer from 'components/Footer'
import Sponsors, { BrandData } from 'components/Sponsors'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
  sponsorsItems: BrandData[]
}

const Base = ({ children, sponsorsItems }: BaseTemplateProps) => (
  <S.Wrapper>
    <S.MenuSection>
      <Menu backgroundColor="white" />
    </S.MenuSection>

    {children}

    <S.SponsorsSection>
      <Sponsors item={sponsorsItems} />
    </S.SponsorsSection>

    <S.FooterSection>
      <Footer />
    </S.FooterSection>
  </S.Wrapper>
)

export default Base
