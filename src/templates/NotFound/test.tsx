import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import NotFound from '.'

describe('<NotFound />', () => {
  it('should render correctly', () => {
    renderWithTheme(<NotFound />)

    expect(
      screen.getByRole('heading', { name: /página não encontrada/i })
    ).toBeInTheDocument()
  })
})
