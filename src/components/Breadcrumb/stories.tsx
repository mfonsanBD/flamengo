import { Story, Meta } from '@storybook/react'
import Breadcrumb, { BreadcrumbProps } from '.'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  args: {
    home: 'Página Inicial',
    title: 'Equipe'
  }
} as Meta

export const Default: Story<BreadcrumbProps> = (args) => (
  <Breadcrumb {...args} />
)
