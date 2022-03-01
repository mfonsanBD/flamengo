import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import bannerItems from 'components/Banner/mock'
import matchItems from 'components/MatchCardSlider/mock'
import trophysItems from 'components/TrophyArea/mock'
import newsItems from 'components/NewsCard/mock'
import sponsorsItems from 'components/Sponsors/mock'

import Home from '.'

const props = {
  bannerItems,
  matchItems,
  trophysItems,
  mainNews: newsItems[0],
  newsItems: newsItems.slice(1, 7),
  flaTVNews: newsItems[0],
  flaTVItems: newsItems.slice(5, 10),
  sponsorsItems: sponsorsItems
}

jest.mock('components/TrophyArea', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock TrophyArea" />
  }
}))

describe('<Home />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Mock TrophyArea')).toBeInTheDocument()
  })
})
