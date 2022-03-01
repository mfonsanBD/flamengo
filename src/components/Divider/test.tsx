import { renderWithTheme } from 'utils/testes/helpers'

import { Divider } from '.'

describe('<Divider />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Divider />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        margin: 9rem auto 3rem;
        height: 0.1rem;
        background: rgba(181,181,181,0.3);
        border: 0;
      }

      @media (min-width:768px) {
        .c0 {
          margin: calc(9rem * 2.5) auto 9rem;
        }
      }

      <hr
        class="c0"
      />
    `)
  })
})
