import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import PlayerStatistics from '.'

const props = {
  shirtNumber: 9,
  position: 'Atacante',
  matches: 147,
  minutes: 12.888,
  goals: 104,
  assists: 33,
  trophys: 10
}

describe('<PlayerStatistics />', () => {
  it('should render correctly', () => {
    renderWithTheme(<PlayerStatistics {...props} />)

    expect(screen.getByRole('heading', { name: '9' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Atacante/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '147' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '12.888' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '104' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '33' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '10' })).toBeInTheDocument()
  })
})
