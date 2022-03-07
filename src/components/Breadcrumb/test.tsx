import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import Breadcrumb from '.'

const props = {
  home: 'Página Inicial',
  title: 'Equipe'
}

describe('<Breadcrumb />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Breadcrumb {...props} />)

    expect(screen.getByText(/página inicial/i)).toBeInTheDocument()
  })

  it('should render breadcrumb background', () => {
    renderWithTheme(<Breadcrumb {...props} />)

    expect(
      screen.getByText(/página inicial/i).parentElement?.parentElement
    ).toHaveStyle({
      backgroundColor: '#F80032',
      height: '5.2rem'
    })
  })

  it('should render correctly breadcrumb font size', () => {
    renderWithTheme(<Breadcrumb {...props} />)

    expect(screen.getByText(/página inicial/i)?.parentElement).toHaveStyle({
      'font-size': '1.4rem'
    })
  })
})
