import React from "react";
import "../App.scss";
import { Card } from "./Card";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className={"container"}>
      <nav className={"navbar"}>
        <div className="top">
          <Card
            name="Turn On"
            onOrOff="on"
            brightness={false}
            temp={false}
            color={false}
            cardClassName={"card"}
            buttonClassName={"lightButton"}
          />
          <Card
            name="Turn Off"
            onOrOff="off"
            brightness={false}
            temp={false}
            color={false}
            cardClassName={"card"}
            buttonClassName={"lightButton"}
          />
        </div>
        <div className="bottom"></div>
      </nav>
    </div>
  );
};
