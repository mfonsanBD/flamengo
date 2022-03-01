import { Story, Meta } from '@storybook/react'
import PlayerCard, { PlayerCardProps } from '.'

import player from './mock'

export default {
  title: 'PlayerCard',
  component: PlayerCard,
  args: player
} as Meta

export const Default: Story<PlayerCardProps> = (args) => (
  <div style={{ maxWidth: '37.5rem', maxHeight: '45rem' }}>
    <PlayerCard {...args} />
  </div>
)
