import { renderWithTheme } from 'utils/testes/helpers'

import { Grid } from '.'

describe('<Grid />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Grid />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(25rem,1fr));
        grid-gap: 3rem;
        margin: 3rem 0;
      }

      <div
        class="c0"
      />
    `)
  })
})
