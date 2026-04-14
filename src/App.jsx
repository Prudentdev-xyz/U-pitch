import React from "react";
import { Header } from "./componenents/layouts/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Live } from "./Pages/Live";
import { Footer } from "./componenents/layouts/footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Live />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
