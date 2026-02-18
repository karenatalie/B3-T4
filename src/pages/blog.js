import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, addManual } from '../store'; // Perhatikan ../ karena naik 1 folder

const Blog = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.blog);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    if (status === 'idle') dispatch(fetchPosts());
  }, [status, dispatch]);

  return (
    <div className="page">
      <h1>📝 Blog Posts</h1>
      <div className="input-box">
        <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        <button onClick={() => { dispatch(addManual(newTitle)); setNewTitle(''); }}>Tambah</button>
      </div>
      {status === 'loading' ? <p>Loading...</p> : (
        <ul>{items.map(post => <li key={post.id} className="card">{post.title}</li>)}</ul>
      )}
    </div>
  );
};

export default Blog;