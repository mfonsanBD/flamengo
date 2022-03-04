import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import Badge from '.'

const props = {
  title: 'Carioca'
}

describe('<Badge />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Badge {...props} />)

    expect(screen.getByText(/Carioca/i)).toBeInTheDocument()
  })

  it('should render red background', () => {
    renderWithTheme(<Badge {...props} color="red" />)

    expect(screen.getByText(/Carioca/i)).toHaveStyle({
      backgroundColor: '#F80032'
    })
  })

  it('should render white background', () => {
    renderWithTheme(<Badge {...props} color="white" />)

    expect(screen.getByText(/Carioca/i)).toHaveStyle({
      backgroundColor: '#FAFAFA'
    })
  })
})
