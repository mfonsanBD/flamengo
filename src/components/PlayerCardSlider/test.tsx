import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import items from './mock'

import PlayerCardSlider from '.'

describe('<PlayerCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<PlayerCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<PlayerCardSlider items={items} />)

    expect(screen.getByLabelText(/previous match/i)).toHaveStyle({
      backgroundColor: '#F80032'
    })
    expect(screen.getByLabelText(/next match/i)).toHaveStyle({
      backgroundColor: '#F80032'
    })
  })
})
