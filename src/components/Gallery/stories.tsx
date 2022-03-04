import { Story, Meta } from '@storybook/react'
import Gallery, { GalleryProps } from '.'

import mock from './mock'

export default {
  title: 'Gallery',
  component: Gallery,
  args: mock
} as Meta

export const Default: Story<GalleryProps> = (args) => <Gallery {...args} />
