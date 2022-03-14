import { screen } from '@testing-library/react'
import classificacaoMock from 'components/ClassificationTable/mock'
import optionsMock from 'components/Select/mock'
import sponsorsItems from 'components/Sponsors/mock'
import { renderWithTheme } from 'utils/testes/helpers'
import Classificacao from '.'
const props = {
  options: optionsMock,
  items: classificacaoMock,
  sponsorsItems
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Select', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Select" />
  }
}))

jest.mock('components/ClassificationTable', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ClassificationTable" />
  }
}))

describe('<Classificacao />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Classificacao {...props} />)

    expect(screen.getByTestId('Mock Select')).toBeInTheDocument()
    expect(screen.getByTestId('Mock ClassificationTable')).toBeInTheDocument()
  })
})
