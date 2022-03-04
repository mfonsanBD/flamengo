import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import PlayerData from '.'

const props = {
  fullName: 'Gabriel Barbosa Almeida',
  birthday: '30/08/1996 (25 anos)',
  nationality: 'Brasileiro',
  city: 'São Bernardo do Campo/SP',
  foot: 'Esquerdo',
  since: 'Janeiro/2019'
}

describe('<PlayerData />', () => {
  it('should render correctly', () => {
    renderWithTheme(<PlayerData {...props} />)

    expect(
      screen.getByRole('heading', { name: /gabriel barbosa almeida/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: '30/08/1996 (25 anos)' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /brasileiro/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'São Bernardo do Campo/SP' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /esquerdo/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Janeiro/2019' })
    ).toBeInTheDocument()
  })
})
