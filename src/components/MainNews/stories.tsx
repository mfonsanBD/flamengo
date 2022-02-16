import { Story, Meta } from '@storybook/react'
import MainNews, { MainNewsProps } from '.'

export default {
  title: 'MainNews',
  component: MainNews,
  parameters: {
    backgrounds: {
      default: 'black'
    }
  }
} as Meta

export const Default: Story<MainNewsProps> = (args) => (
  <div style={{ maxWidth: '57.9rem' }}>
    <MainNews {...args} />
  </div>
)

Default.args = {
  cover: '/img/main-news-cover.jpg',
  title: 'Inicio da caminhada no Campeonato Carioca'
}

export const HorizontalMode: Story<MainNewsProps> = (args) => (
  <MainNews {...args} hasBadge />
)

HorizontalMode.args = {
  cover: '/img/main-news-cover.jpg',
  title: 'Inicio da caminhada no Campeonato Carioca',
  mode: 'horizontal'
}
