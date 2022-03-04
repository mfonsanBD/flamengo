import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import Gallery from '.'
import mock from './mock'

describe('<Gallery />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Gallery {...mock} />)

    expect(screen.getByLabelText('player gallery')).toBeInTheDocument()

    expect(
      screen.getByText(/clube de regatas do flamengo/i)
    ).toBeInTheDocument()

    expect(screen.getByText(/gabi/i)).toBeInTheDocument()
  })
})
