import React, { useEffect } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchDestinations } from "../features/taskSlice";

// buat fetch data API dari taskSlice
const Home = () => {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.task.items);

	useEffect(() => {
		dispatch(fetchDestinations());
	}, [dispatch]);

	return (
		<div className="home">
			<section className="hero">
				{/* VIDEO BACKGROUND */}
				<video autoPlay loop muted playsInline className="video-bg">
					<source src="/vidio/ombak.mp4" type="video/mp4" />
				</video>

				{/* DARK OVERLAY */}
				<div className="overlay"></div>

				{/* HERO CONTENT */}
				<div className="hero-content">
					<h1>Escape to Paradise with B3T4 Explor</h1>
					<p>Temukan tiket & destinasi tropis impianmu sekarang.</p>

					<div className="search-box">
						<input type="text" placeholder="Mau ke mana?" />
						<input type="date" />
						<input type="number" placeholder="Jumlah Orang" />
						<button>Cari Sekarang</button>
					</div>
				</div>
			</section>
			<section className="popular">
				<h2>Destinasi Populer</h2>
				<div className="card-grid">
					{/* --- KELOMPOK 1: IMAGE URL --- */}
					<div className="card">
						<img
							src="https://source.unsplash.com/400x300/?bali,beach"
							alt="Bali"
						/>
						<h3>Bali</h3>
						<p>Mulai dari Rp 850.000</p>
					</div>

					<div className="card">
						<img
							src="https://source.unsplash.com/400x300/?maldives"
							alt="Maldives"
						/>
						<h3>Maldives</h3>
						<p>Mulai dari Rp 5.200.000</p>
					</div>

					{/* --- KELOMPOK 2: LOCAL IMAGE --- */}
					<div className="card">
						<img src="/foto/indonesia.jpeg" alt="Bali" />
						<h3>Bali</h3>
						<p>Mulai dari Rp 850.000</p>
					</div>

					<div className="card">
						<img src="/foto/laos.jpeg" alt="Patuxai" />
						<h3>Patuxai</h3>
						<p>Mulai dari Rp 5.200.000</p>
					</div>

					<div className="card">
						<img src="/foto/cambodia.jpeg" alt="Ankor Wat" />
						<h3>Ankor Wat</h3>
						<p>Mulai dari Rp 3.400.000</p>
					</div>

					<div className="card">
						<img src="/foto/brunei.jpeg" alt="Sultan Mosque" />
						<h3>Sultan Mosque</h3>
						<p>Mulai dari Rp 7.100.000</p>
					</div>

					<div className="card">
						<img src="/foto/thailand.jpeg" alt="The Grand Palace" />
						<h3>The Grand Palace</h3>
						<p>Mulai dari Rp 7.100.000</p>
					</div>

					<div className="card">
						<img src="/foto/singa.jpeg" alt="Singapore" />
						<h3>Singapore</h3>
						<p>Mulai dari Rp 7.100.000</p>
					</div>

					{/* --- KELOMPOK 3: TAMBAHAN --- */}
					<div className="card">
						<img
							src="https://source.unsplash.com/400x300/?phuket"
							alt="Phuket"
						/>
						<h3>Phuket</h3>
						<p>Mulai dari Rp 3.400.000</p>
					</div>

					<div className="card">
						<img
							src="https://source.unsplash.com/400x300/?hawaii"
							alt="Hawaii"
						/>
						<h3>Hawaii</h3>
						<p>Mulai dari Rp 7.100.000</p>
					</div>
				</div>{" "}
				{/* Penutup card-grid */}
			</section>{" "}
			{/* Penutup popular section */}
			{/* //Buat penggunaan thunk, tinggal distyling di CSS */}
			<section className="popular">
				<h2>Rekomendasi Destinasi</h2>
				<p> {JSON.stringify(items)} </p>
			</section>
			;
		</div> // Penutup home utama
	);
};

export default Home;
