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
    renderWithTheme(<Badge {...props} />)

    expect(screen.getByText(/Carioca/i).parentElement).toHaveStyle({
      backgroundColor: '#F80032'
    })
  })
})
