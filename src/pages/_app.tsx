import type { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      {/* Theme Provider: aula da rocketseat */}
      {/* https://youtu.be/1nVUfZg2dSA?t=1368 */}
      {/* ThemeProvider */}
      <Component {...pageProps} />
      {/* ThemeProvider */}
    </>
  )
}

export default App
