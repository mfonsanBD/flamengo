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

    expect(screen.getAllByText(/gabriel barbosa almeida/i)).toHaveLength(2)

    expect(screen.getAllByText('30/08/1996 (25 anos)')).toHaveLength(2)

    expect(screen.getAllByText(/brasileiro/i)).toHaveLength(2)

    expect(screen.getAllByText('São Bernardo do Campo/SP')).toHaveLength(2)

    expect(screen.getAllByText(/esquerdo/i)).toHaveLength(2)

    expect(screen.getAllByText('Janeiro/2019')).toHaveLength(2)
  })
})
