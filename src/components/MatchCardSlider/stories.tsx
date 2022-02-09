import { Story, Meta } from '@storybook/react'
import MatchCardSlider, { MatchCardSliderProps } from '.'

import mock from './mock'

export default {
  title: 'MatchCardSlider',
  component: MatchCardSlider,
  args: {
    items: mock
  }
} as Meta

export const Default: Story<MatchCardSliderProps> = (args) => (
  <div style={{ maxWidth: '100rem', margin: '0 auto' }}>
    <MatchCardSlider {...args} />
  </div>
)
