// import React from 'react';

// const About = () => {
//   return (
//     <div className="page">
//       <h1>👤 Profile Page</h1>
//       <p>Ini adalah halaman profil user.</p>
//     </div>
//   );
// };

// export default About;

// ContactPage.jsx
import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

// penggunaan useState dan UseEffect
const About = () => {
	const [visitor, setVisitor] = useState("Yorobun!");

	useEffect(() => {
		alert(`Hello ${visitor}`);
	}, []);

	return (
		<div className="contact-container">
			<section className="hero-section">
				<h1>About Us</h1>
				<p>Where do you want to go? We have the solution for you!</p>
			</section>

			<section className="support-section">
				<h2>Layanan dan Dukungan</h2>
				<ul>
					<li>
						<Link to="/faq">FAQ</Link>
					</li>
					<li>
						<a href="https://community.spotify.com">Komunitas</a>
					</li>
					<li>
						<a href="https://support.spotify.com/contact-us">
							Hubungi Kami
						</a>
					</li>
				</ul>
			</section>

			<section className="office-section">
				<h2>Kantor B3-T4</h2>
			</section>
		</div>
	);
};

export default About;
