import { Story, Meta } from '@storybook/react'
import PlayerCardSlider, { PlayerCardSliderProps } from '.'

import mock from './mock'

export default {
  title: 'PlayerCardSlider',
  component: PlayerCardSlider,
  args: {
    items: mock
  }
} as Meta

export const Default: Story<PlayerCardSliderProps> = (args) => (
  <PlayerCardSlider {...args} />
)
