import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Brightness } from "../components/Brightness";
import ColorChange from "../components/ColorChange";
import { Temp } from "../components/Temp";
import styles from "../styles/Home.module.css";

import Govee from "../node-govee-led/index";

const Lamp = new Govee({
  apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
  mac: "1d:e7:7c:a6:b0:13:b8:e9",
  model: "H6003",
});

const Desk = new Govee({
  apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
  mac: "75:b5:7c:a6:b0:13:ba:9e",
  model: "H6003",
});

function LampTurnOn() {
  Lamp.turnOn();
}

function LampTurnOff() {
  Lamp.turnOff();
}

function DeskTurnOn() {
  Desk.turnOn();
}

function DeskTurnOff() {
  Desk.turnOff();
}

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
        <header className={styles.header}>
          <h1 className={styles.title}>On/Off Control</h1>
        </header>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Turn On</h3>
            <button onClick={LampTurnOn} className={styles.lightButton}>
              Lamp
            </button>
            <button onClick={DeskTurnOn} className={styles.lightButton}>
              Desk
            </button>
          </div>

          <div className={styles.card}>
            <h3>Turn Off</h3>
            <button onClick={LampTurnOff} className={styles.lightButton}>
              Lamp
            </button>
            <button onClick={DeskTurnOff} className={styles.lightButton}>
              Desk
            </button>
          </div>
        </div>
        <Brightness />

        <ColorChange />

        <Temp />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
