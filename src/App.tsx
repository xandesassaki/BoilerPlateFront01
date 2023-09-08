import React from 'react'
import { GlobalStyles } from './components/GlobalStyles/styles'
import { RoutesRender } from './routes/Routes'

function App() {
  return (
    <React.Fragment>
      <RoutesRender />
      <GlobalStyles />
    </React.Fragment>
  )
}

export default App
