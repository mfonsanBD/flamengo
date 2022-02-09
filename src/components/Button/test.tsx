import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'
import theme from 'styles/theme'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '4rem',
      'font-size': '1.8rem',
      padding: '0.8rem 3rem'
    })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size is passed', () => {
    renderWithTheme(<Button size="small">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.4rem'
    })
  })

  it('should render the large size is passed', () => {
    renderWithTheme(<Button size="large">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.8rem',
      padding: '0.8rem 5.2rem'
    })
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render icon on right side', () => {
    renderWithTheme(
      <Button side="right" icon={<AddShoppingCart data-testid="icon" />}>
        Buy Now
      </Button>
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByText(/Buy Now/i)).toBeInTheDocument()
  })

  it('should render icon on left side', () => {
    renderWithTheme(
      <Button side="left" icon={<AddShoppingCart data-testid="icon" />}>
        Buy Now
      </Button>
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByText(/Buy Now/i)).toBeInTheDocument()
  })

  it('should render a default minimal version', () => {
    renderWithTheme(
      <Button
        color="default"
        icon={<AddShoppingCart data-testid="icon" />}
        minimal
      >
        Buy Now
      </Button>
    )

    const button = screen.getByRole('button', { name: /buy now/i })
    expect(button).toHaveStyle({
      background: 'none',
      color: theme.colors.black
    })
    expect(button).toHaveStyleRule('background', 'none', {
      modifier: ':hover'
    })
  })

  it('should render a minimal version with white color', () => {
    renderWithTheme(
      <Button
        color="white"
        icon={<AddShoppingCart data-testid="icon" />}
        minimal
      >
        Buy Now
      </Button>
    )

    const button = screen.getByRole('button', { name: /buy now/i })
    expect(button).toHaveStyle({
      background: 'none',
      color: theme.colors.white
    })
    expect(button).toHaveStyleRule('background', 'none', {
      modifier: ':hover'
    })
  })

  it('should render button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy Now
      </Button>
    )
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })

  it('should render a disabled button', () => {
    renderWithTheme(<Button disabled>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })
})
