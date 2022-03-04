import { Story, Meta } from '@storybook/react'
import PlayerData, { PlayerDataProps } from '.'

import mock from './mock'

export default {
  title: 'PlayerData',
  component: PlayerData,
  parameters: {
    backgrounds: {
      default: 'red'
    }
  },
  args: mock
} as Meta

export const Default: Story<PlayerDataProps> = (args) => (
  <PlayerData {...args} />
)
