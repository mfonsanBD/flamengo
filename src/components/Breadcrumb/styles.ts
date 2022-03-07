import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.spacings.xlarge};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.red};
  `}
`

export const Links = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.montserratBold};
    color: ${theme.colors.white};
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: ${theme.font.sizes.small};

    a {
      color: ${theme.colors.white};
    }
  `}
`
