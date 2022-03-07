import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import galleryMock from 'components/Gallery/mock'
import dataMock from 'components/PlayerData/mock'
import sponsorsItems from 'components/Sponsors/mock'
import bannerMock from 'components/PlayerBanner/mock'
import statisticsMock from 'components/PlayerStatistics/mock'

import Jogador from '.'

const props = {
  banner: bannerMock,
  info: {
    statistics: statisticsMock,
    data: dataMock
  },
  gallery: galleryMock,
  sponsorsItems
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/PlayerBanner', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock PlayerBanner" />
  }
}))

jest.mock('components/PlayerInfo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock PlayerInfo" />
  }
}))

jest.mock('components/Gallery', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Gallery" />
  }
}))

describe('<Jogador />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Jogador {...props} />)

    expect(screen.getByTestId('Mock PlayerBanner')).toBeInTheDocument()
    expect(screen.getByTestId('Mock PlayerInfo')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
  })
})
