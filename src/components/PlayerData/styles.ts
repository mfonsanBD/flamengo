import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 49rem;
    display: flex;
    gap: ${theme.spacings.large};
  `}
`

export const Data = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family.montserratRegular};

    p:not(:last-child) {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family.montserratBold};

    h4:not(:last-child) {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`
