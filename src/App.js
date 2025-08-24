import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';

import './assets/styles/main.scss'
import ToDo from './pages/ToDo';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="home" element={<Home />} />
          <Route path="ToDo" element={<ToDo />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
