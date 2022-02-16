import { renderWithTheme } from 'utils/testes/helpers'

import { TrophyGrid } from '.'

describe('<TrophyGrid />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<TrophyGrid />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-gap: 9rem;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      }

      @media (max-width:1440px) {
        .c0 {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }

      @media (max-width:768px) {
        .c0 {
          grid-template-columns: 1fr 1fr;
          grid-gap: 4rem;
        }
      }

      <div
        class="c0"
      />
    `)
  })
})
