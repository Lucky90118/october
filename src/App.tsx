import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/dashboard';
import ContentPage from './pages/content';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path='/game' element={<ContentPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
