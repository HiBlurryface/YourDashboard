import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import ToDo from './pages/ToDo';
import Home from './pages/Home';
import Weather from './pages/Weather';
import Projects from './pages/Projects';
import Money from './pages/Money';
import Calendar from './pages/Calendar';
import Blog from './pages/Blog';

import './assets/styles/main.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="home" element={<Home />} />
          <Route path="ToDo" element={<ToDo />} />
          <Route path="weather" element={<Weather />} />
          <Route path="projects" element={<Projects />} />
          <Route path="money" element={<Money />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
