import React from 'react';
import PageTransition from '../components/pagetransition'; // <-- Pastikan import benar

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

export default Home;