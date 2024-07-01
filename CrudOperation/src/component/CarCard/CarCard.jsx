import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import styles from "./CarCard.module.css";
import ShowCarCard from "./ShowCarCard/ShowCarCard";
import CarCardDetails from "./CarCardDetails/CarCardDetails";

const CarCard = () => {
  return (
    <section>
      <div className={`card ${styles.cardStyle}`}>
        <ShowCarCard />
      </div>
    </section>
  );
};

export default CarCard;
