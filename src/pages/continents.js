import React from "react";
import { Link } from "react-router-dom";
import "./continents.css";

const Continents = () => {
  const continents = [
    {
      id: "asia",
      name: "Asia",
      image: "/foto/asia.jpeg",
      desc: "Eksplor keindahan budaya dan alam Asia.",
    },
    {
      id: "europe",
      name: "Europe",
      image: "/foto/europe.jpeg",
      desc: "Arsitektur klasik dan kota romantis Eropa.",
    },
    {
      id: "africa",
      name: "Africa",
      image: "/foto/africa.jpeg",
      desc: "Petualangan modern dan alam spektakuler.",
    },
  ];

  return (
    <div className="continents-page">
      <h1>Pilih Benua Tujuan</h1>

      <div className="continents-grid">
        {continents.map((item) => (
          <Link
            to={`/continents/${item.id}`}
            key={item.id}
            className="continent-card"
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Continents;