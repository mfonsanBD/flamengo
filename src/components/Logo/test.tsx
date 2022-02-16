import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/testes/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/flamengo/i)).toHaveStyle({
      fill: theme.colors.white
    })
  })

  it('should render a red label when color is passed', () => {
    renderWithTheme(<Logo color="red" />)
    expect(screen.getByLabelText(/flamengo/i)).toHaveStyle({
      fill: theme.colors.red
    })
  })

  it('should render a smaller logo', () => {
    renderWithTheme(<Logo size="small" />)
    expect(screen.getByLabelText(/flamengo/i)).toHaveStyle({
      width: '5rem'
    })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/flamengo/i)).toHaveStyle({
      width: '7rem'
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/flamengo/i)).toHaveStyle({
      width: '10rem'
    })
  })
})
