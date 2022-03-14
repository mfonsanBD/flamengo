import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'
import ClassificationTable from '.'
import mock from './mock'

describe('<ClassificationTable />', () => {
  it('should render correctly', () => {
    renderWithTheme(<ClassificationTable {...mock} />)

    expect(screen.getByRole('img', { name: /flamengo/i })).toBeInTheDocument()
    expect(screen.getByText(/flamengo/i)).toBeInTheDocument()
  })
})
