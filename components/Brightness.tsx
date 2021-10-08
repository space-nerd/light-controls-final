import React from "react";
import "App.scss";
import { Card } from "./Card";

export const Brightness: React.FC<{}> = ({}) => {
  return (
    <div className={"container"}>
      <h1>Brightness Control</h1>
      <div className={"grid"}>
        <Card
          name="100%"
          onOrOff={false}
          brightness={100}
          temp={false}
          color={false}
          cardClassName={"card"}
          buttonClassName={"lightButton"}
        />
        <Card
          name="75%"
          onOrOff={false}
          brightness={75}
          temp={false}
          color={false}
          cardClassName={"card"}
          buttonClassName={"lightButton"}
        />
        <Card
          name="50%"
          onOrOff={false}
          brightness={50}
          temp={false}
          color={false}
          cardClassName={"card"}
          buttonClassName={"lightButton"}
        />
        <Card
          name="25%"
          onOrOff={false}
          brightness={25}
          temp={false}
          color={false}
          cardClassName={"card"}
          buttonClassName={"lightButton"}
        />
      </div>
    </div>
  );
};
