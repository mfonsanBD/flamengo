import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import Footer from '.'

jest.mock('components/Logo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Logo" />
  }
}))

describe('<Footer />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Footer />)

    expect(screen.getByTestId('Mock Logo')).toBeInTheDocument()
    expect(
      screen.getByText(/Clube de Regatas do Flamengo 2022 © Copyright./i)
    ).toBeInTheDocument()
  })
})
