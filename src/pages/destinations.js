import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDestinations } from "../features/destinationSlice";
import "./destinations.css";

const Destinations = () => {
  const { continentId } = useParams();
  const dispatch = useDispatch();

  const { items, loading } = useSelector(
    (state) => state.destination
  );

  useEffect(() => {
    if (continentId) {
      dispatch(fetchDestinations(continentId));
    }
  }, [dispatch, continentId]);

  const formattedTitle =
    continentId?.charAt(0).toUpperCase() + continentId?.slice(1);

  return (
    <div className="destinations-page">
      <h1>Destinasi di {formattedTitle}</h1>

      {loading && <p>Loading...</p>}

      <div className="destinations-grid">
        {items.map((item) => (
          <div className="destination-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;