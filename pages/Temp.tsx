import React from "react";
import styles from "../styles/Home.module.scss";
import { Card } from "../components/Card";

export default function Temp() {
  return (
    <div className={styles.container}>
      <h1>Temperature Control</h1>
      <div className={styles.grid}>
        <Card
          name="9000"
          onOrOff={false}
          brightness={false}
          temp={9000}
          color={false}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />
        <Card
          name="8000"
          onOrOff={false}
          brightness={false}
          temp={8000}
          color={false}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />
        <Card
          name="7000"
          onOrOff={false}
          brightness={false}
          temp={7000}
          color={false}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />
        <Card
          name="6000"
          onOrOff={false}
          brightness={false}
          temp={6000}
          color={false}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />
        <Card
          name="5000"
          onOrOff={false}
          brightness={false}
          temp={5000}
          color={false}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />
        <Card
          name="4000"
          onOrOff={false}
          brightness={false}
          temp={4000}
          color={false}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />
        <Card
          name="3000"
          onOrOff={false}
          brightness={false}
          temp={3000}
          color={false}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />
        <Card
          name="2000"
          onOrOff={false}
          brightness={false}
          temp={2000}
          color={false}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />
      </div>
    </div>
  );
}
