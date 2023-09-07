import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
        <Routes>
          <Route element={<HomePage />} path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
