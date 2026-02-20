import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const Footer = () => {
	return (
		<footer className="main-footer">
			<div className="footer-container">
				<div className="footer-column">
					<h3 className="footer-logo">
						B3T4<span> Explore</span>
					</h3>
					<p className="footer-desc">
						Made by Group 4 of KADA Batch 3
					</p>
				</div>
				{/* FOOTER DISINI */}
				<div className="footer-column">
					<h4>Contact Us</h4>
					<p>📞 +62 812 3456 7890</p>
					<p>📧 B3T4explore@yuhu.com</p>
					<p>💬 @b3t4explore.official</p>
				</div>
				<div className="footer-column">
					<h4>Address</h4>
					<p>
						B3-T4 Building, 2nd Floor<br />
						Jl. Teknologi Kampus No. 101
						<br />
						Bekasi, West Java
					</p>
				</div>
			</div>
			<div className="footer-bottom">
				<p>
					© {new Date().getFullYear()} B3T4 Devteam. KADA Batch 3,
					Reserved.
				</p>
			</div>
		</footer>
	);
};

const About = () => {
	return (
		<div className="about-page-wrapper">
			<div className="about-content">
				{/* SECTION 1: HERO */}
				<section className="about-hero">
					<div className="hero-overlay">
						<h1>About B3T4 Explore</h1>
						<p>
							Where do you want to go? We have the solution for
							you!
						</p>
					</div>
				</section>

				{/* SECTION BARU: CURRENT PROJECT INFO */}
				<section className="current-project container">
					<div className="project-wrapper">
						<div className="project-text">
							<span className="badge">Featured Project</span>
							<h2>B3-T4 Web Explore</h2>
							<p>
								B3-T4 is a web platform that makes it easy for travelers to book 
								their trips through curated destination recommendations worldwide.
							</p>
							<ul className="tech-stack">
								<li>Easy to use</li>
								<li>Comfortable</li>
								<li>Convinient</li>
							</ul>
						</div>
						<div className="project-image">
							{/* Kamu bisa ganti src ini dengan screenshot aplikasi kamu nantinya */}
							<img
								src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
								alt="Project Preview"
							/>
						</div>
					</div>
				</section>

				{/* SECTION 3: LAYANAN & DUKUNGAN */}
				<section className="support-section container">
					<h2 style={{ textAlign: "center" }}>
						Additional Informations
					</h2>
					;
					<div className="support-grid">
						<Link to="/faq" className="support-card">
							<div className="icon">❓</div>
							<h3>FAQ</h3>
							<p>Find your answers in the FAQ page!</p>
						</Link>
						<a href="#" className="support-card">
							<div className="icon">🌐</div>
							<h3>Community</h3>
							<p>Join and discuss with us!</p>
						</a>
						<a
							href="mailto:support@mydevapp.com"
							className="support-card"
						>
							<div className="icon">✉️</div>
							<h3>Goal of the project? </h3>
							<p>
								Understanding the use of UseState, UseEffect and
								Redux.
							</p>
						</a>
					</div>
				</section>
			</div>

			<Footer />
		</div>
	);
};

export default About;
