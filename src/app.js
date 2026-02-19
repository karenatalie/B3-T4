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
import Blog from "./pages/blog";
import Profile from "./pages/profile";
import faq from "./pages/faq";

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				{/* <Route path="/blog" element={<Blog />} /> */}
				<Route path="/about" element={<About />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/faq" element={<faq />} />
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
					{/* buat ganti navbar yg beneran  */}
					<div className="nav-links">
						<Link to="/">Home</Link>
						{/* <Link to="/blog">Blog</Link> */}
						<Link to="/about">About</Link>
						<Link to="/profile">Profile</Link>
						<Link to="/faq">FAQ</Link>
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
