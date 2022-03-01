import Button from 'components/Button'
import Logo from 'components/Logo'
import Trophy, { TrophyProps } from 'components/Trophy'
import { TrophyGrid } from 'components/TrophyGrid'
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'

import * as S from './styles'

export type TrophyAreaProps = {
  items: TrophyProps[]
}

const TrophyArea = ({ items }: TrophyAreaProps) => (
  <S.Wrapper>
    <S.LogoArea>
      <Logo color="black" />
    </S.LogoArea>

    <S.Title>
      <span>o</span>maior<span>do</span>rio
    </S.Title>

    <S.TrophyGridArea>
      <TrophyGrid>
        {items.map((item, index) => (
          <Trophy
            trophy={item.trophy}
            trophySize={item.trophySize}
            wins={item.wins}
            nameTop={item.nameTop}
            nameBottom={item.nameBottom}
            key={index}
          />
        ))}
      </TrophyGrid>
    </S.TrophyGridArea>

    <S.ButtonArea>
      <Button
        minimal
        color="white"
        side="right"
        size="small"
        icon={<ArrowRight />}
        as="a"
        href="/titulos"
      >
        Ver Lista Completa
      </Button>
    </S.ButtonArea>
  </S.Wrapper>
)

export default TrophyArea
