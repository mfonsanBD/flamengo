import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import Equipe from '.'

import sponsorsMock from 'components/Sponsors/mock'
import playersMock from 'components/PlayerCardSlider/mock'

const props = {
  goleiros: playersMock.slice(0, 2),
  zagueiros: playersMock.slice(0, 4),
  laterais: playersMock.slice(0, 6),
  meias: playersMock.slice(0, 6),
  atacantes: playersMock.slice(0, 6),
  sponsorsItems: sponsorsMock
}

describe('<Equipe />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Equipe {...props} />)

    expect(
      screen.getByRole('heading', { name: /Goleiros/i })
    ).toBeInTheDocument()
  })
})
