import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import ContentPage from "./pages/content";
import { BeerProvider } from "./context/beer";

function App() {
  return (
    <BeerProvider>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/game" element={<ContentPage />} />
        </Routes>
      </Router>
    </BeerProvider>
  );
}

export default App;
