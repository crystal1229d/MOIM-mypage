import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider, Helmet } from 'react-helmet-async'

import App from './App'
import reportWebVitals from './reportWebVitals'
import GlobalStyle from './components/styles/globalStyles'

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
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)

reportWebVitals()
