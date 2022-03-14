import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 118rem;
    padding: ${theme.spacings.medium};
    background-color: ${theme.colors.white};
    font-family: ${theme.font.family.montserratBold};

    table {
      width: 100%;
      border-collapse: collapse;

      th {
        text-transform: uppercase;
        color: ${theme.colors.mediumGray};
      }

      td {
        text-transform: uppercase;
        text-align: center;
        color: ${theme.colors.darkGray};

        &:nth-child(2) {
          text-align: left;
        }

        &:nth-child(1) {
          width: 5%;
        }

        &:not(:nth-child(1)):not(:nth-child(2)) {
          width: 8%;
        }
      }

      tbody {
        border-bottom: thin solid ${theme.colors.lightGray};

        &:last-child {
          border-bottom: none;
        }
      }

      tr {
        line-height: 7rem;
      }
    }
  `}
`

export const Escudo = styled.img`
  height: 3rem;
`

export const EscudoENome = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
