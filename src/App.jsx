import React from 'react'
import { Header } from './layouts/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home /> } /> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
