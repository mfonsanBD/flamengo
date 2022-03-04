import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import PlayerInfo from '.'

import dataMock from 'components/PlayerData/mock'
import statsMock from 'components/PlayerStatistics/mock'

jest.mock('components/PlayerData', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock PlayerData"></div>
    }
  }
})

jest.mock('components/PlayerStatistics', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock PlayerStatistics"></div>
    }
  }
})

describe('<PlayerInfo />', () => {
  it('should render correctly', () => {
    renderWithTheme(<PlayerInfo statistics={statsMock} data={dataMock} />)

    expect(screen.getByTestId('Mock PlayerData')).toBeInTheDocument()
    expect(screen.getByTestId('Mock PlayerStatistics')).toBeInTheDocument()
  })
})
