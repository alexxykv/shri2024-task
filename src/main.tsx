import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.tsx'
import Main from './components/Main.tsx'
import Footer from './components/Footer.tsx'

ReactDOM.createRoot(document.body!).render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
)
