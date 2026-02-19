import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import "./app.css";
import { AnimatePresence } from "framer-motion";

// IMPORT HALAMAN
import Home from "./pages/home";
import About from "./pages/about";
import Booking from "./pages/booking";
import Profile from "./pages/profile";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
          <div className="logo">🎠 B3T4 Explore</div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
            {/* <span style={{color:"yellow"}}>DEBUG</span> */}
          </div>
        </nav>

        <div className="content">
          <AnimatedRoutes />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
