import { Story, Meta } from '@storybook/react'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'black'
    }
  }
} as Meta

export const Default: Story = (args) => <Menu {...args} />
