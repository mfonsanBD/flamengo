import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  position: relative;

  .slick-slide > div {
    margin: 0;
    cursor: pointer;
  }

  .slick-track {
    display: inline-block;
  }

  .slick-list {
    text-align: right;
  }

  ${media.lessThan('huge')`
    overflow-x: hidden;
  `}
`

export const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 68.6rem;
  overflow: hidden;

  ${media.lessThan('medium')`
    height: 100vh;
  `}

  img {
    width: 100%;

    ${media.lessThan('medium')`
      width: auto;
      position: relative;
      right: 120%;
      height: 100vh;
      background-size: cover;
    `}
  }
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    width: 100%;
    height: 100%;
    opacity: 0.7;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
  `}
`

export const Thambs = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 3rem;
    bottom: 3rem;
    width: 50%;
    z-index: 999999;

    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      cursor: pointer;
    }

    ${media.lessThan('medium')`
      right: 0;
      left: 0;
      bottom: 3rem;
      width: 100%;

      .slick-slide > div {
        margin: 0 0.3rem;
        cursor: pointer;
      }
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 45%;
    left: 3rem;
    bottom: 3rem;
    display: block;
    z-index: 999999;
    color: #ffffff;

    ${media.lessThan('medium')`
      right: 0;
      left: 0;
      bottom: 13rem;
      width: 100%;
    `}

    a {
      color: ${theme.colors.white};
      transition: all 0.3s ease-in-out;

      &:hover {
        margin-left: 1rem;
      }
    }

    .slick-list {
      text-align: left;
    }
  `}
`

export const Label = styled.span`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.colors.red};
    font-family: ${theme.font.family.googleSansBold};
    font-size: ${theme.font.sizes.xsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.colors.white};
    font-family: ${theme.font.family.montserratBold};
    margin: ${theme.spacings.small} 0};
    font-size: ${theme.font.sizes.medium};

    ${media.greaterThan('medium')`
      margin: ${theme.spacings.small} 0 ${theme.spacings.large};
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`
