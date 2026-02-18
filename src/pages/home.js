import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home">

      <section className="hero">

        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-bg"
        >
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
          <div className="card">
            <img src="https://source.unsplash.com/400x300/?bali,beach" alt="Bali" />
            <h3>Bali</h3>
            <p>Mulai dari Rp 850.000</p>
          </div>

          <div className="card">
            <img src="https://source.unsplash.com/400x300/?maldives" alt="Maldives" />
            <h3>Maldives</h3>
            <p>Mulai dari Rp 5.200.000</p>
          </div>

          <div className="card">
            <img src="https://source.unsplash.com/400x300/?phuket" alt="Phuket" />
            <h3>Phuket</h3>
            <p>Mulai dari Rp 3.400.000</p>
          </div>

          <div className="card">
            <img src="https://source.unsplash.com/400x300/?hawaii" alt="Hawaii" />
            <h3>Hawaii</h3>
            <p>Mulai dari Rp 7.100.000</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
