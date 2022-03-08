import { Story, Meta } from '@storybook/react'
import Select, { SelectProps } from '.'
import mock from './mock'

export default {
  title: 'form/Select',
  component: Select,
  args: mock
} as Meta

export const Default: Story<SelectProps> = (args) => <Select {...args} />
