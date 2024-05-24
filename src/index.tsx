import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider, Helmet } from 'react-helmet-async'

import App from './App'
import reportWebVitals from './reportWebVitals'
import GlobalStyle from './components/styles/globalStyles'
import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
)

reportWebVitals()
