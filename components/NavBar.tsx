import React from "react";
import styles from "../styles/Home.module.scss";
import { Card } from "./Card";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className="top">
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
        </div>
        <div className="bottom"></div>
      </nav>
    </div>
  );
};
