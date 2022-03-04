import Badge from 'components/Badge'

import * as S from './styles'

export type PlayerStatisticsPorps = {
  shirtNumber: number
  position: string
  matches: number
  minutes: number
  goals: number
  assists: number
  trophys: number
}

const PlayerStatistics = ({
  shirtNumber,
  position,
  matches,
  minutes,
  goals,
  assists,
  trophys
}: PlayerStatisticsPorps) => (
  <S.Wrapper>
    <S.Statistic>
      <Badge color="white" title="Camisa" />
      <h4>{shirtNumber}</h4>
    </S.Statistic>

    <S.Statistic>
      <Badge color="white" title="Posição" />
      <h4>{position}</h4>
    </S.Statistic>

    <S.Statistic>
      <Badge color="white" title="Partidas" />
      <h4>{matches}</h4>
    </S.Statistic>

    <S.Statistic>
      <Badge color="white" title="Minutos" />
      <h4>{minutes}</h4>
    </S.Statistic>

    <S.Statistic>
      <Badge color="white" title="Gols" />
      <h4>{goals}</h4>
    </S.Statistic>

    <S.Statistic>
      <Badge color="white" title="Assistências" />
      <h4>{assists}</h4>
    </S.Statistic>

    <S.Statistic>
      <Badge color="white" title="Títulos" />
      <h4>{trophys}</h4>
    </S.Statistic>
  </S.Wrapper>
)

export default PlayerStatistics
