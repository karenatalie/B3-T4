import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFaqData } from '../store';
import './faq.css';

const Faq = () => {
  //useState (Untuk mengatur animasi Accordion mana yang terbuka)
  const [activeIndex, setActiveIndex] = useState(null);

  //Redux Hooks (Untuk dispatch aksi dan mengambil data dari Store)
  const dispatch = useDispatch();
  const { data: faqData = [], status = 'idle' } = useSelector((state) => state.faq || {});

  //useEffect (Untuk memicu Thunk saat halaman pertama kali dibuka)
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFaqData()); // Menjalankan Thunk
    }
  }, [status, dispatch]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="faq-container">
        
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers for your dream journey with B3T4 Explore</p>
        </div>

        {/* Tampilan saat Redux Thunk sedang memproses data (Simulasi Loading) */}
        {status === 'loading' && (
          <div style={{ textAlign: 'center', color: 'var(--accent-start)' }}>
            <h3>⏳ Mengambil data FAQ...</h3>
          </div>
        )}

        {/* Tampilan saat data sudah sukses diambil dari Redux */}
        {status === 'success' && (
          <div className="faq-list">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              >
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <span>{item.q}</span>
                  <div className="faq-icon-wrapper">
                    <span className="faq-icon">
                      {activeIndex === index ? '−' : '+'}
                    </span>
                  </div>
                </div>
                
                <div className={`faq-answer-wrapper ${activeIndex === index ? 'open' : ''}`}>
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Faq;