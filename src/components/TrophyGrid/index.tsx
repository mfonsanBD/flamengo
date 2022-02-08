import styled, { css } from 'styled-components'

export const TrophyGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: ${theme.spacings.medium} 10rem;
  `}
`
