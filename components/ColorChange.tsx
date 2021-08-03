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

function LampRed() {
  Lamp.setColor("#ff0000");
}

function DeskRed() {
  Desk.setColor("#ff0000");
}

function LampGreen() {
  Lamp.setColor("#00ff00");
}

function DeskGreen() {
  Desk.setColor("#00ff00");
}

function LampBlue() {
  Lamp.setColor("#0000ff");
}

function DeskBlue() {
  Desk.setColor("#0000ff");
}

function LampMagenta() {
  Lamp.setColor("#ff00ff");
}

function DeskMagenta() {
  Desk.setColor("#ff00ff");
}

function LampPurple() {
  Lamp.setColor("#800080");
}

function DeskPurple() {
  Desk.setColor("#800080");
}

function LampAqua() {
  Lamp.setColor("#00ffff");
}

function DeskAqua() {
  Desk.setColor("#00ffff");
}

function LampLightBlue() {
  Lamp.setColor("#0070f3");
}

function DeskLightBlue() {
  Desk.setColor("#0070f3");
}

function LampWhite() {
  Lamp.setColor("#ffffff");
}

function DeskWhite() {
  Desk.setColor("#ffffff");
}

const ColorChange: React.FC<{}> = ({}) => {
  return (
    <div className={styles.container}>
      <h1>Color Control</h1>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>White</h3>
          <button onClick={LampWhite} className={styles.lightButton}>
            Lamp
          </button>
          <button onClick={DeskWhite} className={styles.lightButton}>
            Desk
          </button>
        </div>

        <div className={styles.card}>
          <h3>Red</h3>
          <button onClick={LampRed} className={styles.lightButton}>
            Lamp
          </button>
          <button onClick={DeskRed} className={styles.lightButton}>
            Desk
          </button>
        </div>

        <div className={styles.card}>
          <h3>Green</h3>
          <button onClick={LampGreen} className={styles.lightButton}>
            Lamp
          </button>
          <button onClick={DeskWhite} className={styles.lightButton}>
            Desk
          </button>
        </div>

        <div className={styles.card}>
          <h3>Blue</h3>
          <button onClick={LampBlue} className={styles.lightButton}>
            Lamp
          </button>
          <button onClick={DeskBlue} className={styles.lightButton}>
            Desk
          </button>
        </div>

        <div className={styles.card}>
          <h3>Magenta</h3>
          <button onClick={LampMagenta} className={styles.lightButton}>
            Lamp
          </button>
          <button onClick={DeskMagenta} className={styles.lightButton}>
            Desk
          </button>
        </div>

        <div className={styles.card}>
          <h3>Purple</h3>
          <button onClick={LampPurple} className={styles.lightButton}>
            Lamp
          </button>
          <button onClick={DeskPurple} className={styles.lightButton}>
            Desk
          </button>
        </div>

        <div className={styles.card}>
          <h3>Aqua</h3>
          <button onClick={LampAqua} className={styles.lightButton}>
            Lamp
          </button>
          <button onClick={DeskAqua} className={styles.lightButton}>
            Desk
          </button>
        </div>

        <div className={styles.card}>
          <h3>Light Blue</h3>
          <button onClick={LampLightBlue} className={styles.lightButton}>
            Lamp
          </button>
          <button onClick={DeskLightBlue} className={styles.lightButton}>
            Desk
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorChange;
