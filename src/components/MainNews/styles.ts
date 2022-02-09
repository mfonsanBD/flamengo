import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { MainNewsProps } from '.'

type CoverProps = Pick<MainNewsProps, 'cover'>

export const Wrapper = styled.div`
  position: relative;
  height: 32rem;

  ${media.greaterThan('medium')`
    height: 69.4rem;
  `}
`

export const Cover = styled.div<CoverProps>`
  ${({ theme, cover }) => css`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url(${cover});
    background-size: cover;
    background-position: bottom center;

    ${media.greaterThan('medium')`
      background-position: top center;
    `}

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      background: ${theme.colors.black};
      opacity: 0.7;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    position: absolute;
    padding: 0 ${theme.spacings.medium};
    bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      bottom: ${theme.spacings.xlarge};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.font.family.montserratBold};
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-size: ${theme.font.sizes.large};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.medium};
    `}
  `}
`
