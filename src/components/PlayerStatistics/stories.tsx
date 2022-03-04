import { Story, Meta } from '@storybook/react'
import PlayerStatistics, { PlayerStatisticsPorps } from '.'

import mock from './mock'

export default {
  title: 'PlayerStatistics',
  component: PlayerStatistics,
  parameters: {
    backgrounds: {
      default: 'red'
    }
  },
  args: mock
} as Meta

export const Default: Story<PlayerStatisticsPorps> = (args) => (
  <PlayerStatistics {...args} />
)
