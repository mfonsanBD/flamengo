import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 49rem;
    display: flex;
    gap: ${theme.spacings.large};

    ${media.lessThan('huge')`
      width: 100%;
      gap: ${theme.spacings.small};
    `}

    ${media.lessThan('medium')`
      width: 100%;
    `}
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

    ${media.lessThan('medium')`
      text-align: center;

      h4:not(:last-child) {
        margin-bottom: ${theme.spacings.medium};
      }

      p:not(:last-child){
        margin-bottom: ${theme.spacings.xxsmall};
      }
    `}
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family.montserratBold};

    ${media.lessThan('medium')`
      display: none;
    `}

    h4:not(:last-child) {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`
