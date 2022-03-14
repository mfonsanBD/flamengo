import { Story, Meta } from '@storybook/react'
import ClassificationTable, { ClassificationTableProps } from '.'

import mock from './mock'

export default {
  title: 'ClassificationTable',
  component: ClassificationTable,
  args: mock
} as Meta

export const Default: Story<ClassificationTableProps> = (args) => (
  <ClassificationTable {...args} />
)
