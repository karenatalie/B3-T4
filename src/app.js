import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './app.css';

// IMPORT HALAMAN YANG SUDAH DIPISAH
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Profile from './pages/profile';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <nav className="navbar">
          <div className="logo">MyDevApp</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
          </div>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;