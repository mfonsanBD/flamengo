import { Story, Meta } from '@storybook/react'

import PlayerBanner, { PlayerBannerProps } from '.'

import mock from './mock'

export default {
  title: 'PlayerBanner',
  component: PlayerBanner,
  args: mock
} as Meta

export const Default: Story<PlayerBannerProps> = (args) => (
  <PlayerBanner {...args} />
)
