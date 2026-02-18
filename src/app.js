import React from 'react';
// Tambahkan useLocation di baris import
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './app.css';
import { AnimatePresence } from 'framer-motion';

// IMPORT HALAMAN
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Profile from './pages/profile';

// 1. Buat komponen terpisah untuk Routes agar bisa pakai useLocation
const AnimatedRoutes = () => {
  const location = useLocation(); // Sekarang location sudah terdefinisi

  return (
    <AnimatePresence mode="wait">
      {/* location dan key sekarang mengambil data dari hook useLocation */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <nav className="navbar">
          <div className="logo"> 🎠B3T4 Explore App</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
          </div>
        </nav>

        <div className="content">
          {/* 2. Panggil komponen AnimatedRoutes di sini */}
          <AnimatedRoutes />
        </div>
      </Router>
    </Provider>
  );
}

export default App;