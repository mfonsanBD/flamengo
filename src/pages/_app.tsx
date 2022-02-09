import Head from 'next/head'
import { AppProps } from 'next/app'
import { useApollo } from 'utils/apollo'
import NextNprogress from 'nextjs-progressbar'

import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Clube de Regatas do Flamengo - Página Inicial</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#06092B" />
          <meta
            name="description"
            content="The best games stories in the world!"
          />
        </Head>
        <GlobalStyles />
        <NextNprogress
          color={theme.colors.red}
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
