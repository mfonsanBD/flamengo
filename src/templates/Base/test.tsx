import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import Base from '.'

import mock from 'components/Sponsors/mock'

const props = {
  children: <h1>Base</h1>,
  sponsorsItems: mock
}

describe('<Base />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Base {...props} />)

    expect(screen.getByRole('heading', { name: /Base/i })).toBeInTheDocument()
  })
})
