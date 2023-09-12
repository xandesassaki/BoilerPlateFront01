import React from 'react'
import { GlobalStyles } from './components/GlobalStyles/styles'
import { RoutesRender } from './routes/Routes'
import { Header } from './components/Header'

function App() {
  return (
    <React.Fragment>
      <Header />
      <RoutesRender />
      <GlobalStyles />
    </React.Fragment>
  )
}

export default App
