import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/testes/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a black heading by default', () => {
    renderWithTheme(<Heading firstTitle="Flamengo" />)
    expect(screen.getByRole('heading', { name: /flamengo/i })).toHaveStyle({
      color: theme.colors.black
    })
  })
  it('should render a black and red heading if secondTitle is passed', () => {
    renderWithTheme(<Heading firstTitle="Fla" secondTitle="mengo" />)
    expect(screen.getByRole('heading', { name: /fla/i })).toHaveStyle({
      color: theme.colors.black
    })
    expect(screen.getByText(/mengo/i)).toHaveStyle({
      color: theme.colors.red
    })
  })
})
