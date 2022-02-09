import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import MatchCard from '.'

const props = {
  date: 'Domingo, 06 de Fevereiro de 2022',
  match: 'Campeonato Carioca - 4ª rodada',
  homeBrand: '/img/emblema.svg',
  homeName: 'Flamengo',
  guestBrand: '/img/escudo-placeholder.svg',
  guestName: 'Visitante',
  hour: '20:00',
  stadium: 'Maracanã'
}

describe('<MatchCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<MatchCard {...props} />)

    expect(
      screen.getByText('Domingo, 06 de Fevereiro de 2022')
    ).toBeInTheDocument()

    expect(
      screen.getByText('Campeonato Carioca - 4ª rodada')
    ).toBeInTheDocument()

    expect(
      screen.getByRole('image', { name: props.homeName })
    ).toBeInTheDocument()

    expect(screen.getByText('Flamengo')).toBeInTheDocument()

    expect(
      screen.getByRole('image', { name: props.guestName })
    ).toBeInTheDocument()

    expect(screen.getByText('Visitante')).toBeInTheDocument()

    expect(screen.getByText('20:00')).toBeInTheDocument()

    expect(screen.getByText('Maracanã')).toBeInTheDocument()
  })
})
