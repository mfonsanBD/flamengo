import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  backgrounds: {
    default: 'bg',
    values: [
      {
        name: 'bg',
        value: theme.colors.background
      },
      {
        name: 'black',
        value: theme.colors.black
      },
      {
        name: 'red',
        value: theme.colors.red
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
