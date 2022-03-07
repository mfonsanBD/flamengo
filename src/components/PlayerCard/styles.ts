import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.colors.black};
    padding: ${theme.spacings.large};
    height: 100%;

    a {
      width: 100%;
      color: ${theme.colors.white};
      font-family: ${theme.font.family.googleSansBold};
      font-size: ${theme.font.sizes.medium};
      text-transform: uppercase;
    }
  `}
`

export const PlayerNumber = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-family: ${theme.font.family.montserratBold};
    font-size: ${theme.font.sizes.xxlarge};
    margin-bottom: 19.5rem;
    position: relative;
    z-index: ${theme.layers.modal};

    ${media.lessThan('medium')`
      text-align: right;
    `}
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(33, 33, 33, 0) 30%,
      rgba(33, 33, 33, 1) 100%
    );
    z-index: ${theme.layers.overlay};
  `}
`

export const PlayerImage = styled.img`
  ${({ theme }) => css`
    height: 45rem;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: ${theme.layers.base};
  `}
`

export const PlayerName = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.montserratBold};
    font-size: ${theme.font.sizes.xlarge};
    line-height: 0.8;
    text-transform: uppercase;
    position: relative;
    z-index: ${theme.layers.modal};
    margin-bottom: 7rem;
  `}
`

export const PlayerButton = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: transparent;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: thin solid ${theme.colors.mediumGray};
    padding: ${theme.spacings.medium} ${theme.spacings.large};
    text-align: left;
    z-index: ${theme.layers.modal};
  `}
`
