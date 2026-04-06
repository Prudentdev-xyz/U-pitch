import React from 'react'
import { Header } from './layouts/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Live } from './Pages/Live';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Live />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
