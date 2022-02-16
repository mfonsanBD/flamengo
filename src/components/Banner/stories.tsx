import { Story, Meta } from '@storybook/react'
import Banner, { BannerProps } from '.'

import items from './mock'

export default {
  title: 'Banner',
  component: Banner,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'black'
    }
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '144rem', maxHeight: '68.6rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)
