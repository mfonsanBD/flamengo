import { renderWithTheme } from 'utils/testes/helpers'

import { TrophyGrid } from '.'

describe('<TrophyGrid />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<TrophyGrid />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(14.9rem,1fr));
        grid-gap: 3rem;
        margin: 3rem 0;
      }

      <div
        class="c0"
      />
    `)
  })
})
