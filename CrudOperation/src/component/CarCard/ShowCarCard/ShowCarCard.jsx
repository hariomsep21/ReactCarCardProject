import React, { useEffect, useState } from "react";
import styles from "./ShowCarCard.module.css";
import CarCardDetails from "../CarCardDetails/CarCardDetails";

const ShowCarCard = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/carCard")
      .then((res) => res.json())
      .then((data) => setCarData(data));
  }, []);

  return (
    <div className={styles.cardContainer}>
      {carData.map((item) => (
        <div key={item.id} className={`card ${styles.card}`}>
          <img
            className={`card-img-top ${styles.card_img_top}`}
            src={item.image}
            alt="Card image cap"
          />
          <div className={`card-body ${styles.card_Body}`}>
            <p className="card-text">{item.text}</p>
          </div>
          <CarCardDetails />
        </div>
      ))}
    </div>
  );
};

export default ShowCarCard;
