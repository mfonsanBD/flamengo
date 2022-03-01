import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/testes/helpers'

import Trophy from '.'

const props = {
  trophy: '/img/carioca.png',
  nameTop: 'Campeonato',
  nameBottom: 'Carioca',
  wins: 37
}

describe('<Trophy />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Trophy {...props} trophySize="small" />)

    expect(
      screen.getByRole('image', {
        name: props.nameTop
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/campeonato/i)).toBeInTheDocument()
    expect(screen.getByText(/carioca/i)).toBeInTheDocument()
    expect(screen.getByText(/37/i)).toBeInTheDocument()
  })

  it('should render the smaller trophy', () => {
    renderWithTheme(<Trophy {...props} trophySize="small" />)

    expect(
      screen.getByRole('image', {
        name: props.nameTop
      })
    ).toHaveStyle({
      height: '9rem'
    })
  })

  it('should render the medium trophy', () => {
    renderWithTheme(<Trophy {...props} trophySize="medium" />)

    expect(
      screen.getByRole('image', {
        name: props.nameTop
      })
    ).toHaveStyle({
      height: '10.3rem'
    })
  })

  it('should render the bigger trophy', () => {
    renderWithTheme(<Trophy {...props} trophySize="large" />)

    expect(
      screen.getByRole('image', {
        name: props.nameTop
      })
    ).toHaveStyle({
      height: '13rem'
    })
  })
})
