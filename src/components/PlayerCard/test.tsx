import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import PlayerCard from '.'

const props = {
  floatImage: '/img/red-dead-img.jpg',
  number: '10',
  name: 'Player Name',
  buttonLabel: 'Player Data',
  buttonLink: '/player-data'
}

describe('<PlayerCard />', () => {
  it('should render the heading and button', () => {
    renderWithTheme(<PlayerCard {...props} />)

    expect(screen.getByRole('heading', { name: /10/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /player name/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /player data/i })
    ).toBeInTheDocument()
  })
})
