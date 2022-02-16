import { Story, Meta } from '@storybook/react'
import TrophyArea, { TrophyAreaProps } from '.'

import trophysMock from './mock'

export default {
  title: 'TrophyArea',
  component: TrophyArea,
  args: {
    items: trophysMock
  }
} as Meta

export const Default: Story<TrophyAreaProps> = (args) => (
  <TrophyArea {...args} />
)
