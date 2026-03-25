import React from 'react'
import { Header } from './layouts/header'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      </BrowserRouter>
    </div>
  )
}

export default App
