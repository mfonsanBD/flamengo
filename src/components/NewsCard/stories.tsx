import { Story, Meta } from '@storybook/react'
import NewsCard, { NewsCardProps } from '.'

export default {
  title: 'NewsCard',
  component: NewsCard,
  args: {
    title: 'News Title',
    description: 'News description',
    cover: '/img/main-news-cover.jpg'
  }
} as Meta

export const Default: Story<NewsCardProps> = (args) => (
  <div style={{ maxWidth: '26.5rem' }}>
    <NewsCard {...args} date="2020-11-21T23:00:00" />
  </div>
)

export const WithoutDate: Story<NewsCardProps> = (args) => (
  <div style={{ maxWidth: '26.5rem' }}>
    <NewsCard {...args} />
  </div>
)
