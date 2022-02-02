import { Story, Meta } from '@storybook/react'
import { Ticket } from '@styled-icons/ionicons-outline/Ticket'
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Buy Now'
}

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Buy Now',
  side: 'left',
  icon: <Ticket />
}

export const asMinimal: Story<ButtonProps> = (args) => <Button {...args} />

asMinimal.args = {
  children: 'Buy Now',
  minimal: true,
  side: 'right',
  icon: <ArrowRight />,
  as: 'a',
  href: '/link'
}
