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
    expect(screen.getAllByText(/ver mais/i)).toHaveLength(1)

    expect(
      screen.getByRole('image', {
        name: /cover/i
      })
    ).toHaveStyle({
      backgroundImage: 'url(/img/main-news-cover.jpg)'
    })
  })

  it('should render main news in horizontal mode', () => {
    renderWithTheme(<MainNews {...props} mode="horizontal" />)

    expect(
      screen.getByRole('image', {
        name: /cover/i
      }).parentElement
    ).toHaveStyle({
      display: 'flex'
    })
  })

  it('should render hasBadge', () => {
    renderWithTheme(<MainNews {...props} mode="horizontal" hasBadge />)
    expect(screen.getByText(/time principal/i)).toBeInTheDocument()
  })
})
