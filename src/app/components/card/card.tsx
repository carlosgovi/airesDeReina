import React from "react";
import styles from "./card.module.css";
const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>imagen</div>
      <div className={styles.card_text}>
        <h3 className={styles.card_title}>Título</h3>
        <p className={styles.card_description}>Descripción</p>
        <div>
          <div className={styles.card_certificate}>
            <span className={styles.card_certificate_data}></span>
            <div className={styles.card_certificate_text}>certificate</div>
          </div>
          <button className={styles.card_button}>Ver más</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
