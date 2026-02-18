import React from 'react';
import PageTransition from '../components/pagetransition'; // <-- Pastikan import benar

<<<<<<< HEAD
import "./home.css";
=======
const Home = () => {
  return (
    <PageTransition> 
      <div className="page">
        <h1>🏠 Home Page</h1>
        {/* Konten kamu */}
      </div>
    </PageTransition>
  );
};
>>>>>>> ff14b3ef5555ca6a9a01c93d744a3b54a3409e5d

const Home = () => {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">
          <h1>Jelajahi Dunia Bersama B3T4 Explor</h1>
          <p>Booking hotel, tiket, dan paket wisata dengan mudah.</p>

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
          <div className="card">
            <img src="https://source.unsplash.com/400x300/?bali" alt="" />
            <h3>Bali</h3>
            <p>Mulai dari Rp 850.000</p>
          </div>

          <div className="card">
            <img src="https://source.unsplash.com/400x300/?tokyo" alt="" />
            <h3>Tokyo</h3>
            <p>Mulai dari Rp 4.500.000</p>
          </div>

          <div className="card">
            <img src="https://source.unsplash.com/400x300/?paris" alt="" />
            <h3>Paris</h3>
            <p>Mulai dari Rp 6.200.000</p>
          </div>

          <div className="card">
            <img src="https://source.unsplash.com/400x300/?singapore" alt="" />
            <h3>Singapore</h3>
            <p>Mulai dari Rp 2.100.000</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
