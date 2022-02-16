import { renderWithTheme } from 'utils/testes/helpers'

import { Grid } from '.'

describe('<Grid />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Grid />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(auto-fill,minmax(30rem,1fr));
      }

      @media (max-width:1440px) {
        .c0 {
          grid-template-columns: repeat(auto-fill,minmax(19rem,1fr));
        }
      }

      @media (max-width:768px) {
        .c0 {
          grid-template-columns: repeat(auto-fill,minmax(19rem,1fr));
        }
      }

      <div
        class="c0"
      />
    `)
  })
})
