export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  font: {
    family: {
      montserratBold:
        "Montserrat Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      montserratRegular:
        "Montserrat Regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      googleSansMedium:
        "GoogleSans Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      googleSansBold:
        "GoogleSans Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    sizes: {
      xsmall: '1rem',
      xxsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.8rem',
      large: '2.4rem',
      xlarge: '3.6rem',
      xxlarge: '6.4rem',
      huge: '28.8rem'
    }
  },
  colors: {
    red: '#F80032',
    black: '#212121',
    white: '#FAFAFA',
    background: '#EDEFF3',
    darkness: '#2D2D2D',
    darkGray: '#545454',
    mediumGray: '#888888',
    lightGray: '#CDCDCD',
    yellow: '#FFCA00',
    success: '#198754'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.5rem',
    small: '2rem',
    medium: '3rem',
    large: '4rem',
    xlarge: '5.2rem',
    xxlarge: '9rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
