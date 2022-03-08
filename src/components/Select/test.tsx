import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/testes/helpers'

import Select from '.'
import mock from './mock'

describe('<Select />', () => {
  it('should render the select options', () => {
    renderWithTheme(<Select campeonatos={mock} />)

    expect(
      screen.getByRole('option', { name: /campeonato carioca 2022/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('option', { name: /campeonato brasileiro 2022/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('option', { name: /copa libertadores da américa 2022/i })
    ).toBeInTheDocument()
  })

  it('should render the selected option', () => {
    renderWithTheme(<Select campeonatos={mock} />)

    userEvent.click(
      screen.getByRole('option', { name: /campeonato carioca 2022/i })
    )

    expect(screen.getByText(/campeonato carioca 2022/i)).toBeInTheDocument()
  })
})
