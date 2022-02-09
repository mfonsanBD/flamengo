import { Story, Meta } from '@storybook/react'
import Badge, { BadgeProps } from '.'

export default {
  title: 'Badge',
  component: Badge,
  args: {
    title: 'Brasileirão'
  }
} as Meta

export const Default: Story<BadgeProps> = (args) => <Badge {...args} />
