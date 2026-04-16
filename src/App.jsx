import React from "react";
import { Header } from "./componenents/layouts/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Live } from "./Pages/Live";
import { Footer } from "./componenents/layouts/footer";
import { Fixtures } from "./Pages/Fixtures";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Live />} />
          <Route path="/fixtures" element={<Fixtures />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
