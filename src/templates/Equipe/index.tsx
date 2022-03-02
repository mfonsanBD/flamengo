import Base from 'templates/Base'
import Heading from 'components/Heading'
import Breadcrumb from 'components/Breadcrumb'
import { BrandData } from 'components/Sponsors'
import { PlayerCardProps } from 'components/PlayerCard'
import PlayerCardSlider from 'components/PlayerCardSlider'

import * as S from './styles'

export type EquipeTemplateProps = {
  goleiros: PlayerCardProps[]
  zagueiros: PlayerCardProps[]
  laterais: PlayerCardProps[]
  meias: PlayerCardProps[]
  atacantes: PlayerCardProps[]
  sponsorsItems: BrandData[]
}

const Equipe = ({
  goleiros,
  zagueiros,
  laterais,
  meias,
  atacantes,
  sponsorsItems
}: EquipeTemplateProps) => (
  <Base sponsorsItems={sponsorsItems}>
    <Breadcrumb home="Página Inicial" title="Equipe" />

    <S.Content>
      <S.GoleirosSection>
        <Heading firstTitle="Goleiros" />
        <PlayerCardSlider items={goleiros} />
      </S.GoleirosSection>

      <S.ZagueirosSection>
        <Heading firstTitle="Zagueiros" />
        <PlayerCardSlider items={zagueiros} />
      </S.ZagueirosSection>

      <S.LateraisSection>
        <Heading firstTitle="Laterais" />
        <PlayerCardSlider items={laterais} />
      </S.LateraisSection>

      <S.MeiasSection>
        <Heading firstTitle="Meio-Campistas" />
        <PlayerCardSlider items={meias} />
      </S.MeiasSection>

      <S.AtacantesSection>
        <Heading firstTitle="Atacantes" />
        <PlayerCardSlider items={atacantes} />
      </S.AtacantesSection>
    </S.Content>
  </Base>
)

export default Equipe
