import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Projects type="all" />} />
          <Route path="/static" element={<Projects type="Static" />} />
          <Route path="/reactjs" element={<Projects type="React JS" />} />
          <Route path="/php" element={<Projects type="Php" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
