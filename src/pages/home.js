// pages/Tasks.js
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, addTask } from '../features/taskSlice';

const Tasks = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.tasks);
  const [newTask, setNewTask] = useState(''); // Local State

  useEffect(() => {
    if (status === 'idle') dispatch(fetchTasks());
  }, [status, dispatch]);

  const handleAdd = () => {
    if (newTask) {
      dispatch(addTask({ id: Date.now(), title: newTask, completed: false }));
      setNewTask('');
    }
  };

return (
    <div className="page">

      {/* HOME SECTION */}
      <section className="home" id="home">
        <div className="head_container">
          <div className="box">
            <div className="text">
              <h1>Welcome in Info Polri</h1>
              <p>
                Selamat datang di Info Polri. Kami akan menampilkan informasi
                seputar POLRI terbaru, actual, dan terpercaya.
              </p>
            </div>
            <div className="image">
              <img src={mainHome} className="img" alt="main" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about top" id="about">
        <div className="container flex">
          <div className="left">
            <div className="img">
              <img src={about1} alt="" className="image1" />
              <img src={about2} alt="" className="image2" />
            </div>
          </div>

          <div className="right">
            <div className="heading">
              <h5>TEMUKAN INFORMASI SEPUTAR POLRI DISINI</h5>
              <h2>Welcome to Info Polri</h2>
              <p>
                Kepolisian Negara Republik Indonesia (Polri) adalah Polisi
                Nasional di Indonesia yang bertanggung jawab langsung di bawah Presiden.
              </p>

              <Link to="/about">
                <button className="btn1">Selengkapnya</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SOTK */}
      <section className="wrapper top">
        <div className="container">
          <div className="text">
            <h2>Susunan Organisasi Tata Kerja (SOTK)</h2>
            <p>
              Peraturan Presiden Nomor 52 Tahun 2010 tentang SOTK Polri
              merupakan pelaksanaan amanat Undang-Undang Nomor 2 Tahun 2002.
            </p>

            <div className="content">
              <div className="box flex">
                <a href="https://polri.go.id/webpolri/assets/img/others/struktur_mabes.gif" target="_blank" rel="noreferrer">
                  Mabes
                </a>
              </div>

              <div className="box flex">
                <a href="https://polri.go.id/webpolri/assets/img/others/poldaA.gif" target="_blank" rel="noreferrer">
                  Polda
                </a>
              </div>

              <div className="box flex">
                <a href="https://polri.go.id/webpolri/assets/img/others/polres.gif" target="_blank" rel="noreferrer">
                  Polres
                </a>
              </div>

              <div className="box flex">
                <a href="https://polri.go.id/webpolri/assets/img/others/polsek.gif" target="_blank" rel="noreferrer">
                  Polsek
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BERITA */}
      <section className="room top" id="room">
        <div className="container">
          <div className="heading_top flex1">
            <div className="heading">
              <h5>Baca Berita Disini!!!</h5>
              <h2>Berita Polri</h2>
            </div>
          </div>

          <div className="content grid">
            <div className="box">
              <div className="img">
                <img src={bookInternasional} alt="" />
              </div>
              <div className="text-center">
                <h3>
                  <Link to="/categories/internasional">
                    Internasional
                  </Link>
                </h3>
              </div>
            </div>

            <div className="box">
              <div className="img">
                <img src={bookPolri} alt="" />
              </div>
              <div className="text-center">
                <h3>
                  <Link to="/categories/polri-untuk-rakyat">
                    Polri Untuk Rakyat
                  </Link>
                </h3>
              </div>
            </div>

            <div className="box">
              <div className="img">
                <img src={bookSosmed} alt="" />
              </div>
              <div className="text-center">
                <h3>
                  <Link to="/categories/sosial-media">
                    Sosial Media
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div className="button">
            <Link to="/info">
              <button className="btn1">Lihat Semua</button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;