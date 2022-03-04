import PlayerData, { PlayerDataProps } from 'components/PlayerData'
import PlayerStatistics, {
  PlayerStatisticsPorps
} from 'components/PlayerStatistics'

import * as S from './styles'

export type PlayerInfoProps = {
  statistics: PlayerStatisticsPorps
  data: PlayerDataProps
}

const PlayerInfo = ({ data, statistics }: PlayerInfoProps) => (
  <S.Wrapper>
    <PlayerStatistics {...statistics} />
    <S.Divider />
    <PlayerData {...data} />
  </S.Wrapper>
)

export default PlayerInfo
