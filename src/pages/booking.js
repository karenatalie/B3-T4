import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, addManual } from '../store'; // Perhatikan ../ karena naik 1 folder

const Booking = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.booking);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    if (status === 'idle') dispatch(fetchPosts());
  }, [status, dispatch]);

  return (
    <div className="page">
      <h1>📅 Booking</h1>
      <h2>How to Book Flights with B3-TA</h2>
      <h1>1.<u>Search Your Flight</u></h1>
      <h2>Start your search by filling in the flight details.</h2>
      <h1>2.<u>Choose and Book Flight</u></h1>
      <h2>Airline name, flight schedule, and ticket price will be shown on the search results page. Choose and book the best flight for you.</h2>
      <h1>3.<u>Fill In Contact Information and Passenger Details</u></h1>
      <h2>After choosing your flight, fill in the contact information and passenger details.</h2>
      <h2>You can add travel insurance to your booking as well.</h2>
      <h1>4.<u>Complete Your Payment</u></h1>
      <h2>From the many payment methods available, choose one that best suits you.</h2>
      <h1>5.<u>Receive Your E-ticket</u></h1>
      <h2>Within 60 minutes after your payment is confirmed, we will send your e-ticket to your email.</h2>
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

export default Booking;

