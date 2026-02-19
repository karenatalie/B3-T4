import React, { useState } from 'react';
import './faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      q: "Bagaimana cara memesan tiket destinasi?",
      a: "Sangat mudah! Pilih destinasi yang Anda inginkan, tentukan tanggal kunjungan dan jumlah tiket, isi data pemesan, lalu selesaikan pembayaran. E-tiket akan langsung muncul di halaman Profile Anda."
    },
    {
      q: "Apakah saya bisa memesan tiket untuk hari yang sama (Go-Show)?",
      a: "Bisa, selama kuota tiket di destinasi tersebut masih tersedia. Namun, kami sangat menyarankan Anda memesan minimal H-1 sebelum kunjungan agar perjalanan lebih tenang."
    },
    {
      q: "Metode pembayaran apa saja yang diterima?",
      a: "Kami menerima pembayaran melalui Transfer Bank, Virtual Account (BCA, Mandiri, BNI), e-Wallet (GoPay, OVO, DANA), dan Kartu Kredit."
    },
    {
      q: "Apakah bisa membatalkan pesanan atau reschedule?",
      a: "Reschedule dan refund bisa dilakukan maksimal H-3 sebelum tanggal kunjungan, bergantung pada kebijakan masing-masing destinasi wisata. Biaya admin mungkin berlaku."
    },
    {
      q: "Apakah E-tiket harus dicetak (di-print)?",
      a: "Tidak perlu. Anda cukup menunjukkan E-tiket berupa Barcode/QR Code langsung dari layar HP Anda ke petugas di pintu masuk destinasi."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="faq-container">
        
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>Temukan jawaban untuk perjalanan impianmu bersama B3T4 Explore.</p>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{item.q}</span>
                {/* Lingkaran ikon yang akan berubah warna saat aktif */}
                <div className="faq-icon-wrapper">
                  <span className="faq-icon">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
              </div>
              
              {/* Wrapper jawaban dengan animasi smooth */}
              <div className={`faq-answer-wrapper ${activeIndex === index ? 'open' : ''}`}>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Faq;