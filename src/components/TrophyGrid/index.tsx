import styled, { css } from 'styled-components'

export const TrophyGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(14.9rem, 1fr));
    grid-gap: ${theme.spacings.medium};
    margin: ${theme.spacings.medium} 0;
  `}
`
