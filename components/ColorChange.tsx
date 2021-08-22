import React from "react";
import styles from "../styles/Home.module.scss";
import { Card } from "./Card";

const ColorChange: React.FC<{}> = ({}) => {
  return (
    <div className={styles.container}>
      <h1>Color Control</h1>

      <div className={styles.grid}>
        <Card
          name="White"
          onOrOff={false}
          brightness={false}
          temp={false}
          color={"#ffffff"}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />

        <Card
          name="Blue"
          onOrOff={false}
          brightness={false}
          temp={false}
          color={"#0000ff"}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />

        <Card
          name="Red"
          onOrOff={false}
          brightness={false}
          temp={false}
          color={"#ff0000"}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />
        <Card
          name="Light Blue"
          onOrOff={false}
          brightness={false}
          temp={false}
          color={"#0066ff"}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />

        <Card
          name="Purple"
          onOrOff={false}
          brightness={false}
          temp={false}
          color={"#ff00ff"}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />
        <Card
          name="Pink"
          onOrOff={false}
          brightness={false}
          temp={false}
          color={"#ff0066"}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />

        <Card
          name="Aqua"
          onOrOff={false}
          brightness={false}
          temp={false}
          color={"#00ffff"}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />

        <Card
          name="Green"
          onOrOff={false}
          brightness={false}
          temp={false}
          color={"#00ff00"}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />
      </div>
    </div>
  );
};

export default ColorChange;
