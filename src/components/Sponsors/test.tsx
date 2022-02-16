import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import Sponsors from '.'

const props = [
  {
    brand: '/img/sponsors/adidas.png',
    name: 'Adidas'
  },
  {
    brand: '/img/sponsors/brb.png',
    name: 'BRB'
  },
  {
    brand: '/img/sponsors/eletrobras.png',
    name: 'Eletrobras'
  },
  {
    brand: '/img/sponsors/havan.png',
    name: 'Havan'
  },
  {
    brand: '/img/sponsors/mercado-livre.png',
    name: 'Mercado Livre'
  },
  {
    brand: '/img/sponsors/pixbet.png',
    name: 'Pixbet'
  },
  {
    brand: '/img/sponsors/tim.png',
    name: 'Tim'
  }
]

describe('<Sponsors />', () => {
  it('should render sponsors brands correctly', () => {
    renderWithTheme(<Sponsors item={props} />)

    expect(screen.getByLabelText(/tim/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/brb/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/havan/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/adidas/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/pixbet/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/eletrobras/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/mercado livre/i)).toBeInTheDocument()
  })
})
