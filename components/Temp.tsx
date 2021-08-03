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

function LampTemp9000() {
  Lamp.setColorTemperature(9000);
}

function DeskTemp9000() {
  Desk.setColorTemperature(9000);
}

function LampTemp8000() {
  Lamp.setColorTemperature(8000);
}

function DeskTemp8000() {
  Desk.setColorTemperature(8000);
}

function LampTemp7000() {
  Lamp.setColorTemperature(7000);
}

function DeskTemp7000() {
  Desk.setColorTemperature(7000);
}

function LampTemp6000() {
  Lamp.setColorTemperature(6000);
}

function DeskTemp6000() {
  Desk.setColorTemperature(6000);
}

function LampTemp5000() {
  Lamp.setColorTemperature(5000);
}

function DeskTemp5000() {
  Desk.setColorTemperature(5000);
}

function LampTemp4000() {
  Lamp.setColorTemperature(4000);
}

function DeskTemp4000() {
  Desk.setColorTemperature(4000);
}

function LampTemp3000() {
  Lamp.setColorTemperature(3000);
}

function DeskTemp3000() {
  Desk.setColorTemperature(3000);
}

function LampTemp2000() {
  Lamp.setColorTemperature(2000);
}

function DeskTemp2000() {
  Desk.setColorTemperature(2000);
}

export const Temp: React.FC<{}> = ({}) => {
  return (
    <div className={styles.container}>
      <h1>Temperature Control</h1>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Temp 9000</h3>
          <button onClick={LampTemp9000} className={styles.lightButton}>
            Lamp
          </button>
          <button onClick={DeskTemp9000} className={styles.lightButton}>
            Desk
          </button>
        </div>

        <div className={styles.card}>
          <h3>Temp 8000</h3>
          <button onClick={LampTemp8000} className={styles.lightButton}>
            Lamp
          </button>
          <button onClick={DeskTemp8000} className={styles.lightButton}>
            Desk
          </button>
        </div>

        <div className={styles.card}>
          <h3>Temp 7000</h3>
          <button onClick={LampTemp7000} className={styles.lightButton}>
            Lamp
          </button>
          <button onClick={DeskTemp7000} className={styles.lightButton}>
            Desk
          </button>
        </div>

        <div className={styles.card}>
          <h3>Temp 6000</h3>
          <button onClick={LampTemp6000} className={styles.lightButton}>
            Lamp
          </button>
          <button onClick={DeskTemp6000} className={styles.lightButton}>
            Desk
          </button>
        </div>

        <div className={styles.card}>
          <h3>Temp 5000</h3>
          <button onClick={LampTemp5000} className={styles.lightButton}>
            Lamp
          </button>
          <button onClick={DeskTemp5000} className={styles.lightButton}>
            Desk
          </button>
        </div>

        <div className={styles.card}>
          <h3>Temp 4000</h3>
          <button onClick={LampTemp4000} className={styles.lightButton}>
            Lamp
          </button>
          <button onClick={DeskTemp4000} className={styles.lightButton}>
            Desk
          </button>
        </div>

        <div className={styles.card}>
          <h3>Temp 3000</h3>
          <button onClick={LampTemp3000} className={styles.lightButton}>
            Lamp
          </button>
          <button onClick={DeskTemp3000} className={styles.lightButton}>
            Desk
          </button>
        </div>

        <div className={styles.card}>
          <h3>Temp 2000</h3>
          <button onClick={LampTemp2000} className={styles.lightButton}>
            Lamp
          </button>
          <button onClick={DeskTemp2000} className={styles.lightButton}>
            Desk
          </button>
        </div>
      </div>
    </div>
  );
};
