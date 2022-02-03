import { Story, Meta } from '@storybook/react'
import MainNews, { MainNewsProps } from '.'

export default {
  title: 'MainNews',
  component: MainNews,
  args: {
    cover: '/img/main-news-cover.jpg',
    title: 'Inicio da caminhada no Campeonato Carioca'
  }
} as Meta

export const Default: Story<MainNewsProps> = (args) => (
  <div style={{ maxWidth: '57.9rem' }}>
    <MainNews {...args} />
  </div>
)
