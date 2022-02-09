import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import Home from '.'

jest.mock('components/TrophyArea', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock TrophyArea" />
  }
}))

describe('<Home />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Home />)

    expect(screen.getByTestId('Mock TrophyArea')).toBeInTheDocument()
  })
})
