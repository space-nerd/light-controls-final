import Head from "next/head";
import React from "react";
import { Card } from "../components/Card";
import { NavBar } from "../components/NavBar";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Light Controls</title>
        <meta name="description" content="Controls for my lights" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Card
          name="Turn On"
          onOrOff="on"
          brightness={false}
          temp={false}
          color={false}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />
        <Card
          name="Turn Off"
          onOrOff="off"
          brightness={false}
          temp={false}
          color={false}
          cardClassName={styles.card}
          buttonClassName={styles.lightButton}
        />

        <NavBar />
      </main>
    </div>
  );
}
