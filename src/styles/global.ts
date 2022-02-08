import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat Regular';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: local('Montserrat Regular'), url('/fonts/Montserrat-Regular.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Montserrat Bold';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Montserrat Bold'), url('/fonts/Montserrat-Bold.woff2') format('woff2')
  }

  @font-face {
    font-family: 'GoogleSans Medium';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('GoogleSans Medium'), url('/fonts/GoogleSans-Medium.woff2') format('woff2')
  }

  @font-face {
    font-family: 'GoogleSans Bold';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('GoogleSans Bold'), url('/fonts/GoogleSans-Bold.woff2') format('woff2')
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::after,
    &::before{
      box-sizing: inherit;
    }
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family.googleSansMedium};
      font-size: ${theme.font.sizes.medium};

      ${!removeBg &&
      css`
        background-color: ${theme.colors.black};
      `}
    }
  `}
`

export default GlobalStyles
