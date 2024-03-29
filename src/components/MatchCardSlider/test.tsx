import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import items from './mock'

import MatchCardSlider from '.'

describe('<MatchCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<MatchCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<MatchCardSlider items={items} />)

    expect(screen.getByLabelText(/previous match/i)?.parentElement).toHaveStyle(
      {
        backgroundColor: '#F80032'
      }
    )
    expect(screen.getByLabelText(/next match/i)?.parentElement).toHaveStyle({
      backgroundColor: '#F80032'
    })
  })
})
