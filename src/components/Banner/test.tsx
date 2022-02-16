import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'
import itemsMock from './mock'

import Gallery from '.'

describe('<Gallery />', () => {
  it('should render thumbnails as button', () => {
    renderWithTheme(<Gallery items={itemsMock.slice(0, 2)} />)
    expect(
      screen.getByRole('button', { name: /Thamb - Gallery Image 1/i })
    ).toHaveAttribute('src', itemsMock[0].src)
    expect(
      screen.getByRole('button', { name: /Thamb - Gallery Image 2/i })
    ).toHaveAttribute('src', itemsMock[1].src)
  })
})
