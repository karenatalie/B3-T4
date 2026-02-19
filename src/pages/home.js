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
            <img src="/foto/myanmar.jpeg" alt="Schwedakong" />
            <h3>Schwedakong</h3>
            <p>Mulai dari Rp 7.100.000</p>
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
            <img src="/foto/malaysia.jpeg" alt="Hawaii" />
            <h3>Kuala Lumpur</h3>
            <p>Mulai dari Rp 7.100.000</p>
          </div>

          <div className="card">
            <img src="/foto/pilipin.jpeg" alt="Hawaii" />
            <h3>dimana ya?</h3>
            <p>Mulai dari Rp 7.100.000</p>
          </div>

          <div className="card">
            <img src="/foto/singa.jpeg" alt="Hawaii" />
            <h3>Singapore</h3>
            <p>Mulai dari Rp 7.100.000</p>
          </div>
          <div className="card">
            <img src="/foto/myanmar.jpeg" alt="Hawaii" />
            <h3>Hawaii</h3>
            <p>Mulai dari Rp 7.100.000</p>
          </div>

          <div className="card">
            <img src="/foto/myanmar.jpeg" alt="Hawaii" />
            <h3>Hawaii</h3>
            <p>Mulai dari Rp 7.100.000</p>
          </div>

          <div className="card">
            <img src="/foto/myanmar.jpeg" alt="Hawaii" />
            <h3>Hawaii</h3>
            <p>Mulai dari Rp 7.100.000</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
