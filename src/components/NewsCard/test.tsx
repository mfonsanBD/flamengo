import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import NewsCard from '.'

const props = {
  title: 'News Title',
  description: 'News description',
  date: '2020-11-21T23:00:00',
  cover: '/img/main-news-cover.jpg'
}

describe('<NewsCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<NewsCard {...props} />)

    expect(screen.getByText(/news title/i)).toBeInTheDocument()
    expect(screen.getByText(/news description/i)).toBeInTheDocument()
  })

  it('should render the cover image', () => {
    renderWithTheme(<NewsCard {...props} />)

    const cover = screen.getByRole('image', {
      name: /cover/i
    })

    expect(cover).toHaveStyle({
      backgroundImage: 'url(/img/main-news-cover.jpg)'
    })
  })

  it('should render the formated date', () => {
    renderWithTheme(<NewsCard {...props} />)

    expect(screen.getByText('21/11/2020')).toBeInTheDocument()
  })

  it('should render button on NewsCard', () => {
    renderWithTheme(<NewsCard {...props} />)

    expect(screen.getByText(/ver mais/i)).toBeInTheDocument()
  })
})
