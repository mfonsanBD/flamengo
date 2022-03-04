import { Story, Meta } from '@storybook/react'

import PlayerInfo, { PlayerInfoProps } from '.'

import dataMock from 'components/PlayerData/mock'
import statsMock from 'components/PlayerStatistics/mock'

export default {
  title: 'PlayerInfo',
  component: PlayerInfo,
  parameters: {
    backgrounds: {
      default: 'red'
    }
  },
  args: {
    statistics: statsMock,
    data: dataMock
  }
} as Meta

export const Default: Story<PlayerInfoProps> = (args) => (
  <PlayerInfo {...args} />
)
