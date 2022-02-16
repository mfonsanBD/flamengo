import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import TrophyArea from '.'

const items = [
  {
    trophy: '/img/trophys/mundial-de-clubes.png',
    trophySize: 'small',
    nameTop: 'Mundial',
    nameBottom: 'de Clubes',
    wins: 1
  },
  {
    trophy: '/img/trophys/taca-libertadores-da-america.png',
    trophySize: 'medium',
    nameTop: 'Libertadores',
    nameBottom: 'da América',
    wins: 2
  }
]

jest.mock('components/Logo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Logo" />
  }
}))

jest.mock('components/Trophy', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Trophy" />
  }
}))

describe('<TrophyArea />', () => {
  it('should render correctly', () => {
    renderWithTheme(<TrophyArea items={items} />)

    expect(
      screen.getByRole('heading', { name: /o maior do rio/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('Mock Logo')).toBeInTheDocument()
  })

  it('should render logo with opacity', () => {
    renderWithTheme(<TrophyArea items={items} />)

    expect(screen.getByTestId('Mock Logo')?.parentElement).toHaveStyle({
      opacity: 0.1
    })
  })

  it('should render area with red background', () => {
    renderWithTheme(<TrophyArea items={items} />)

    expect(
      screen.getByRole('heading', { name: /o maior do rio/i })?.parentElement
    ).toHaveStyle({
      backgroundColor: '#F80032'
    })
  })

  it('should render the quantity tropheus', () => {
    renderWithTheme(<TrophyArea items={items} />)

    expect(screen.getAllByTestId('Mock Trophy')).toHaveLength(2)
  })
})
