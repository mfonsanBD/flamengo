import { renderWithTheme } from 'utils/testes/helpers'

import { TrophyGrid } from '.'

describe('<TrophyGrid />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<TrophyGrid />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 3rem 2rem;
      }

      <div
        class="c0"
      />
    `)
  })
})
