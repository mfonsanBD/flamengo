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

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

describe('<Equipe />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Equipe {...props} />)

    expect(
      screen.getByRole('heading', { name: /goleiros/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /zagueiros/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /laterais/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /meio-campistas/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /atacantes/i })
    ).toBeInTheDocument()
  })
})
