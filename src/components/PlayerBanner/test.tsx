import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import PlayerBanner from '.'

import mock from './mock'

describe('<PlayerBanner />', () => {
  it('should render player name and your float image', () => {
    renderWithTheme(<PlayerBanner {...mock} />)

    expect(
      screen.getByRole('heading', { name: /Bruno Henrique/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /jogador/i })).toHaveAttribute(
      'src',
      '/img/player/bruno-henrique.png'
    )
  })
})
