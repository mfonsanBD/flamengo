import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    ${media.lessThan('medium')`
      flex-direction: column;
      justify-content: flex-start;
    `}

    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide img {
      display: inline-block;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      flex: 1 0 auto;
      height: 100%;

      ${media.lessThan('huge')`
        margin: 0;
      `}

      ${media.lessThan('medium')`
        margin: 0;
      `}

      @media(max-width: 400px) {
        margin: 0;
      }
    }

    .slick-list {
      overflow: hidden;
      height: 70rem;
      margin: 0 -${theme.spacings.xxsmall};

      ${media.lessThan('huge')`
        width: 81.9rem;
        height: 54.6rem;
        margin: 0;
      `}

      ${media.lessThan('medium')`
        width: 100%;
        height: 25.2rem;
        margin: 0;
      `}

      @media(max-width: 400px) {
        width: 100%;
        height: 20rem;
        margin: 0;
      }
    }

    ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xsmall};
      }
      .slick-list {
        margin: 0 -${theme.spacings.xsmall};
      }
    `}

    .slick-prev,
    .slick-next {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      position: absolute;
      border: none;
      bottom: 4rem;

      ${media.lessThan('medium')`
        bottom: -4.5rem;
      `}
    }

    .slick-prev {
      left: 163.5rem;

      ${media.lessThan('huge')`
        left: 86.5rem;
      `}

      ${media.lessThan('medium')`
        left: 30rem;
      `}

      ${media.lessThan('small')`
        left: 22rem;
      `}
    }
    .slick-next {
      left: 174.5rem;

      ${media.lessThan('huge')`
        left: 93.5rem;
      `}

      ${media.lessThan('medium')`
        left: 34rem;
      `}

      ${media.lessThan('small')`
        left: 25rem;
      `}
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`

export const Cover = styled.div`
  width: 80%;

  ${media.lessThan('medium')`
    width: 100%;
  `}
`

export const Image = styled.img``

export const RightSide = styled.div`
  ${({ theme }) => css`
    width: 20%;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};

    ${media.lessThan('medium')`
      width: 100%;
      height: ${theme.spacings.xlarge};
      text-align: center;
    `}
  `}
`

export const ClubAndPlayerNames = styled.div`
  ${({ theme }) => css`
    height: 58rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${media.lessThan('huge')`
      height: 42.6rem;
    `}

    ${media.lessThan('medium')`
      width: 100%;
      height: ${theme.spacings.xlarge};
      border-bottom: thin solid ${theme.colors.background};
    `}

    p {
      transform: rotate(-90deg);
      font-family: ${theme.font.family.googleSansMedium};
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.small};
      text-align: center;

      ${media.lessThan('medium')`
        transform: rotate(0);
      `}

      span {
        color: ${theme.colors.red};
      }
    }
  `}
`

export const SliderArrows = styled.div`
  ${({ theme }) => css`
    height: 12rem;
    background-color: ${theme.colors.red};

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`
