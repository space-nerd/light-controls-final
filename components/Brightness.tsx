import React from "react";
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

function LampBrightness100() {
  Lamp.setBrightness(100);
}

function DeskBrightness100() {
  Desk.setBrightness(100);
}

function LampBrightness75() {
  Lamp.setBrightness(75);
}

function DeskBrightness75() {
  Desk.setBrightness(75);
}

function LampBrightness50() {
  Lamp.setBrightness(50);
}

function DeskBrightness50() {
  Desk.setBrightness(50);
}

function LampBrightness25() {
  Lamp.setBrightness(25);
}

function DeskBrightness25() {
  Desk.setBrightness(25);
}

export const Brightness: React.FC<{}> = ({}) => {
  return (
    <div className={styles.container}>
      <h1>Brightness Control</h1>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Brightness 100%</h3>
          <button onClick={LampBrightness100} className={styles.lightButton}>
            Lamp
          </button>
          <button onClick={DeskBrightness100} className={styles.lightButton}>
            Desk
          </button>
        </div>

        <div className={styles.card}>
          <h3>Brightness 75%</h3>
          <button onClick={LampBrightness75} className={styles.lightButton}>
            Lamp
          </button>
          <button onClick={DeskBrightness75} className={styles.lightButton}>
            Desk
          </button>
        </div>

        <div className={styles.card}>
          <h3>Brightness 50%</h3>
          <button onClick={LampBrightness50} className={styles.lightButton}>
            Lamp
          </button>
          <button onClick={DeskBrightness50} className={styles.lightButton}>
            Desk
          </button>
        </div>

        <div className={styles.card}>
          <h3>Brightness 25%</h3>
          <button onClick={LampBrightness25} className={styles.lightButton}>
            Lamp
          </button>
          <button onClick={DeskBrightness25} className={styles.lightButton}>
            Desk
          </button>
        </div>
      </div>
    </div>
  );
};
