import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .Tim {
      height: 3rem;
    }
    .Havan,
    .Eletrobras,
    .Adidas {
      height: 5rem;
    }
  `}
`

export const Brand = styled.img`
  height: 4rem;
`
