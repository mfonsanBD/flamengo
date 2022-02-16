import { Story, Meta } from '@storybook/react'
import Empty, { EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'black'
    }
  },
  args: {
    title: 'Página Não Encontrada',
    description: 'A página que você está tentando acessa não existe.',
    hasLink: true
  }
} as Meta

export const Default: Story<EmptyProps> = (args) => <Empty {...args} />
