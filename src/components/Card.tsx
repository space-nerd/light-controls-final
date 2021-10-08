import React from "react";
import "../App.scss";
import Govee from "./node-govee-led/index";

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

function LampTask(
  onOff: string | false,
  brightness: number | false,
  temp: number | false,
  color: string | false
) {
  if (onOff && onOff == "on") {
    Lamp.turnOn();
  }
  if (onOff && onOff == "off") {
    Lamp.turnOff();
  }
  if (brightness) {
    Lamp.setBrightness(brightness);
  }
  if (temp) {
    Lamp.setColorTemperature(temp);
  }
  if (color) {
    Lamp.setColor(color);
  }
}

function DeskTask(
  onOff: string | false,
  brightness: number | false,
  temp: number | false,
  color: string | false
) {
  if (onOff && onOff == "on") {
    Desk.turnOn();
  }
  if (onOff && onOff == "off") {
    Desk.turnOff();
  }
  if (brightness) {
    Desk.setBrightness(brightness);
  }
  if (temp) {
    Desk.setColorTemperature(temp);
  }
  if (color) {
    Desk.setColor(color);
  }
}

interface CardProps {
  name: string;
  onOrOff: string | false;
  brightness: number | false;
  temp: number | false;
  color: string | false;
  buttonClassName: string;
  cardClassName: string;
}

export const Card: React.FC<CardProps> = ({
  name,
  onOrOff,
  brightness,
  temp,
  color,
  buttonClassName,
  cardClassName,
}) => {
  return (
    <div className={cardClassName}>
      <h3>{name}</h3>
      <button
        onClick={() => LampTask(onOrOff, brightness, temp, color)}
        className={buttonClassName}
      >
        Lamp
      </button>
      <button
        onClick={() => DeskTask(onOrOff, brightness, temp, color)}
        className={buttonClassName}
      >
        Desk
      </button>
    </div>
  );
};
