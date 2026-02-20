import React, { useEffect, useState } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchDestinations } from "../features/taskSlice"; 
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

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
                </div> Penutup card-grid

                <div style={{ marginTop: "60px", textAlign: "center" }}>
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

            <section className="popular">
                <h2>Rekomendasi Destinasi</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '800px', margin: '0 auto', marginTop: '30px' }}>
                    {items && items.map((item, index) => (
                        <div key={index} style={{ 
                            padding: '20px', 
                            background: '#f8f9fa', 
                            borderRadius: '15px', 
                            boxShadow: '0 4px 10px rgba(0,0,0,0.05)', 
                            textAlign: 'left',
                            borderLeft: '5px solid #6229EE'
                        }}>
                            <h3 style={{ color: '#6229EE', margin: '0 0 10px 0', fontSize: '1.4rem' }}>
                                {item.country}
                            </h3>
                            <p style={{ margin: 0, color: '#444', lineHeight: '1.6', fontSize: '1rem' }}>
                                <strong>Titik Destinasi:</strong> {item.destination ? item.destination.join(' • ') : 'Belum ada data destinasi'}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;