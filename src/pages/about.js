import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-logo">MyDev<span>App</span></h3>
          <p className="footer-desc">
            Membangun solusi digital inovatif dengan kolaborasi kreativitas mahasiswa.
          </p>
        </div>
        <div className="footer-column">
          <h4>Navigasi</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/profile">Team Profile</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Hubungi Kami</h4>
          <p>📞 +62 812 3456 7890</p>
          <p>📧 support@mydevapp.com</p>
          <p>💬 @mydevapp_official</p>
        </div>
        <div className="footer-column">
          <h4>Alamat Kantor</h4>
          <p>Gedung B3-T4, Lantai 2<br />Jl. Teknologi Kampus No. 101<br />Bekasi, Jawa Barat</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MyDevApp Team. All Rights Reserved.</p>
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
            <h1>About MyDevApp</h1>
            <p>Where do you want to go? We have the solution for you!</p>
          </div>
        </section>

        {/* SECTION 2: VISI & MISI */}
        <section className="vision-mission container">
          <div className="content-box">
            <h2>Visi & Misi Kami</h2>
            <p>
              MyDevApp hadir untuk menjembatani ide kreatif mahasiswa dengan solusi digital yang nyata. 
              Kami percaya bahwa setiap baris kode yang kami tulis memiliki potensi untuk memberikan dampak positif bagi komunitas.
            </p>
          </div>
        </section>

        {/* SECTION BARU: CURRENT PROJECT INFO */}
        <section className="current-project container">
          <div className="project-wrapper">
            <div className="project-text">
              <span className="badge">Featured Project</span>
              <h2>MyDevApp Ecosystem</h2>
              <p>
                Project yang sedang kami kembangkan saat ini adalah sebuah platform terintegrasi 
                yang memudahkan kolaborasi antar developer pemula. Fokus utama kami adalah pada 
                **User Experience**, **Performa Tinggi**, dan **Antarmuka yang Intuitif**.
              </p>
              <ul className="tech-stack">
                <li>React.js</li>
                <li>Redux Toolkit</li>
                <li>Framer Motion</li>
                <li>CSS Grid & Flexbox</li>
              </ul>
            </div>
            <div className="project-image">
              {/* Kamu bisa ganti src ini dengan screenshot aplikasi kamu nantinya */}
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Project Preview" />
            </div>
          </div>
        </section>

        {/* SECTION 3: LAYANAN & DUKUNGAN */}
        <section className="support-section container">
          <h2>Layanan dan Dukungan</h2>
          <div className="support-grid">
            <Link to="/faq" className="support-card">
              <div className="icon">❓</div>
              <h3>FAQ</h3>
              <p>Temukan jawaban cepat untuk pertanyaan umum Anda.</p>
            </Link>
            <a href="https://spotify.com" className="support-card">
              <div className="icon">🌐</div>
              <h3>Komunitas</h3>
              <p>Bergabung dengan diskusi dan forum pengguna kami.</p>
            </a>
            <a href="mailto:support@mydevapp.com" className="support-card">
              <div className="icon">✉️</div>
              <h3>Hubungi Kami</h3>
              <p>Punya keluhan atau ide? Tim kami siap membantu.</p>
            </a>
          </div>
        </section>

        {/* SECTION 4: OFFICE */}
        <section className="office-section container">
          <div className="office-card">
            <h2>Kantor B3-T4</h2>
            <p>Jl. Kampus Hebat No. 34, Gedung Teknologi, Lantai 3</p>
            <p className="city">Jakarta, Indonesia</p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;