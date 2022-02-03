import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import MainNews from '.'

const props = {
  cover: '/img/main-news-cover.jpg',
  title: 'Inicio da caminhada no Campeonato Carioca'
}

describe('<MainNews />', () => {
  it('should render correctly', () => {
    renderWithTheme(<MainNews {...props} />)

    expect(
      screen.getByText(/inicio da caminhada no campeonato carioca/i)
    ).toBeInTheDocument()
  })

  it('should render the cover image', () => {
    renderWithTheme(<MainNews {...props} />)

    const cover = screen.getByRole('image', {
      name: /cover/i
    })

    expect(cover).toHaveStyle({
      backgroundImage: 'url(/img/main-news-cover.jpg)'
    })
  })

  it('should render button on MainNews', () => {
    renderWithTheme(<MainNews {...props} />)

    expect(screen.getAllByText(/ver mais/i)).toHaveLength(2)
  })
})
