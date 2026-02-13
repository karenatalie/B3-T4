import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, addTask } from './store';

// 1. HOME PAGE
export const Home = () => (
  <div className="page"><h1>🏠 Home</h1><p>Selamat datang di aplikasi dashboard kami.</p></div>
);

// 2. TASKS PAGE (Gunakan Redux, Thunk, useState, useEffect)
export const Tasks = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector(state => state.tasks);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (status === 'idle') dispatch(fetchTasks());
  }, [status, dispatch]);

  const handleAdd = () => {
    if (input) {
      dispatch(addTask({ id: Date.now(), title: input }));
      setInput('');
    }
  };

  return (
    <div className="page">
      <h1>✅ Task Manager</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Tulis tugas..." />
      <button onClick={handleAdd}>Tambah</button>
      {status === 'loading' ? <p>Loading data...</p> : 
        <ul>{data.map(t => <li key={t.id}>{t.title}</li>)}</ul>}
    </div>
  );
};

// 3. ABOUT PAGE
export const About = () => <div className="page"><h1>ℹ️ About</h1><p>Dibuat dengan React & Redux Toolkit.</p></div>;

// 4. PROFILE PAGE
export const Profile = () => <div className="page"><h1>👤 Profile</h1><p>Developer: Budi Setiawan</p></div>;

// 5. CONTACT PAGE
export const Contact = () => <div className="page"><h1>📞 Contact</h1><p>Email: admin@devapp.com</p></div>;