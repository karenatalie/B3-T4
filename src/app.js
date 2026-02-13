import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, fetchPosts, addManual } from './store';
import './app.css';

// --- KOMPONEN HALAMAN ---
const Home = () => (
  <div className="page">
    <h1>🏠 Home Page</h1>
    <p>Selamat datang di aplikasi Single Page Application (SPA) kami.</p>
  </div>
);

const About = () => (
  <div className="page">
    <h1>ℹ️ About Us</h1>
    <p>Aplikasi ini mendemonstrasikan React, Redux Toolkit, dan Thunk secara lengkap.</p>
  </div>
);

const Blog = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.blog);
  const [newTitle, setNewTitle] = useState(''); // useState untuk input lokal

  // useEffect untuk trigger Thunk saat halaman dimuat
  useEffect(() => {
    if (status === 'idle') dispatch(fetchPosts());
  }, [status, dispatch]);

  return (
    <div className="page">
      <h1>📝 Blog Posts (Thunk)</h1>
      <div className="input-box">
        <input 
          value={newTitle} 
          onChange={(e) => setNewTitle(e.target.value)} 
          placeholder="Tulis judul baru..." 
        />
        <button onClick={() => { dispatch(addManual(newTitle)); setNewTitle(''); }}>Tambah</button>
      </div>
      {status === 'loading' ? <p>Sedang mengambil data...</p> : (
        <ul>
          {items.map(post => <li key={post.id} className="card">{post.title}</li>)}
        </ul>
      )}
    </div>
  );
};

const Profile = () => (
  <div className="page">
    <h1>👤 User Profile</h1>
    <p>Nama: Developer React<br/>Status: Aktif</p>
  </div>
);

const Contact = () => {
  const [msg, setMsg] = useState('');
  return (
    <div className="page">
      <h1>📞 Contact</h1>
      <textarea onChange={(e) => setMsg(e.target.value)} placeholder="Kirim pesan..."></textarea>
      <p>Karakter: {msg.length}</p>
      <button onClick={() => alert('Terkirim!')}>Kirim</button>
    </div>
  );
};

// --- KOMPONEN UTAMA ---
function App() {
  return (
    <Provider store={store}>
      <Router>
        <nav className="navbar">
          <div className="logo">MyDevApp</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;