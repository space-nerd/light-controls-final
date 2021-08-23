import React from "react";
import styles from "../styles/Home.module.scss";
import { Card } from "./Card";

export const Brightness: React.FC<{}> = ({}) => {
  return (
    <div className={styles.container}>
      <h1>Brightness Control</h1>
      <div className={styles.grid}>
        <Card
          name="100%"
          onOrOff={false}
          brightness={100}
          temp={false}
          color={false}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />
        <Card
          name="75%"
          onOrOff={false}
          brightness={75}
          temp={false}
          color={false}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />
        <Card
          name="50%"
          onOrOff={false}
          brightness={50}
          temp={false}
          color={false}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />
        <Card
          name="25%"
          onOrOff={false}
          brightness={25}
          temp={false}
          color={false}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />
      </div>
    </div>
  );
};
