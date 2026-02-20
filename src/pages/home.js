import React, { useEffect, useState } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { fetchTasks } from "../features/taskSlice";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ TAMBAH INI
=======
import { fetchDestinations } from "../features/taskSlice";
>>>>>>> 528640a9c1a1c3cb88ab0cc1d137cbd4dded5aa8

const Home = () => {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.task.items);
	const [activeCard, setActiveCard] = useState(null);

	useEffect(() => {
		dispatch(fetchDestinations());
	}, [dispatch]);

	return (
		<div className="home">
			<section className="hero">
				<video autoPlay loop muted playsInline className="video-bg">
					<source src="/vidio/ombak.mp4" type="video/mp4" />
				</video>

				<div className="overlay"></div>

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

					{/* CARD 1 */}
					<div className="card">
						<img src="/foto/asia.jpeg" alt="Asia" />
						<h3>Asia</h3>
						<p>Paket liburan mulai dari Rp 850.000</p>

						<button
							className="detail-btn"
							onClick={() =>
								setActiveCard(activeCard === 1 ? null : 1)
							}
						>
							{activeCard === 1 ? "Tutup" : "Selengkapnya"}
						</button>

						<AnimatePresence>
							{activeCard === 1 && (
								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: "auto" }}
									exit={{ opacity: 0, height: 0 }}
									transition={{ duration: 0.4 }}
									className="card-extra"
								>
									<p>
										Nikmati keindahan Bali dengan pantai eksotis
										dan budaya yang memukau.
									</p>
								</motion.div>
							)}
						</AnimatePresence>
					</div>

					{/* CARD 2 */}
					<div className="card">
						<img src="/foto/europe.jpeg" alt="Eropa" />
						<h3>Eropa</h3>
						<p>Paket liburan mulai dari Rp 10.500.000</p>

						<button
							className="detail-btn"
							onClick={() =>
								setActiveCard(activeCard === 2 ? null : 2)
							}
						>
							{activeCard === 2 ? "Tutup" : "Selengkapnya"}
						</button>

						<AnimatePresence>
							{activeCard === 2 && (
								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: "auto" }}
									exit={{ opacity: 0, height: 0 }}
									transition={{ duration: 0.4 }}
									className="card-extra"
								>
									<p>
										Destinasi tropis favorit dengan resort
										mewah dan sunset terbaik.
									</p>
								</motion.div>
							)}
						</AnimatePresence>
					</div>

					{/* CARD 3 */}
					<div className="card">
						<img src="/foto/africa.jpeg" alt="Africa" />
						<h3>Africa</h3>
						<p>Paket liburan mulai dari Rp 8.500.000</p>

						<button
							className="detail-btn"
							onClick={() =>
								setActiveCard(activeCard === 3 ? null : 3)
							}
						>
							{activeCard === 3 ? "Tutup" : "Selengkapnya"}
						</button>

						<AnimatePresence>
							{activeCard === 3 && (
								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: "auto" }}
									exit={{ opacity: 0, height: 0 }}
									transition={{ duration: 0.4 }}
									className="card-extra"
								>
									<p>
										Paket wisata lengkap dengan tour guide
										dan hotel premium.
									</p>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>

				{/* ✅ LINK KE CONTINENTS */}
				<div style={{ marginTop: "60px" }}>
					<Link
						to="/continents"
						style={{
							padding: "15px 35px",
							background: "#ff9f1c",
							color: "white",
							borderRadius: "12px",
							textDecoration: "none",
							fontWeight: "bold",
							display: "inline-block",
							transition: "0.3s ease",
						}}
					>
						Lihat Semua Benua →
					</Link>
				</div>
			</section>

<<<<<<< HEAD
=======
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
			{/* Penutup popular section
			//Buat penggunaan thunk, tinggal distyling di CSS */}
>>>>>>> 528640a9c1a1c3cb88ab0cc1d137cbd4dded5aa8
			<section className="popular">
				<h2>Rekomendasi Destinasi</h2>
				<p> {JSON.stringify(items)} </p>
			</section>
		</div>
	);
};

export default Home;