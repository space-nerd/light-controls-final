import React from "react";
import "../App.scss";
import { Card } from "./Card";

export const Temp: React.FC<{}> = () => {
  return (
    <div className={"container"}>
      <h1>Temperature Control</h1>
      <div className={"grid"}>
        <Card
          name="9000"
          onOrOff={false}
          brightness={false}
          temp={9000}
          color={false}
          cardClassName={"card"}
          buttonClassName={"lightButton"}
        />
        <Card
          name="8000"
          onOrOff={false}
          brightness={false}
          temp={8000}
          color={false}
          cardClassName={"card"}
          buttonClassName={"lightButton"}
        />
        <Card
          name="7000"
          onOrOff={false}
          brightness={false}
          temp={7000}
          color={false}
          cardClassName={"card"}
          buttonClassName={"lightButton"}
        />
        <Card
          name="6000"
          onOrOff={false}
          brightness={false}
          temp={6000}
          color={false}
          cardClassName={"card"}
          buttonClassName={"lightButton"}
        />
        <Card
          name="5000"
          onOrOff={false}
          brightness={false}
          temp={5000}
          color={false}
          cardClassName={"card"}
          buttonClassName={"lightButton"}
        />
        <Card
          name="4000"
          onOrOff={false}
          brightness={false}
          temp={4000}
          color={false}
          cardClassName={"card"}
          buttonClassName={"lightButton"}
        />
        <Card
          name="3000"
          onOrOff={false}
          brightness={false}
          temp={3000}
          color={false}
          cardClassName={"card"}
          buttonClassName={"lightButton"}
        />
        <Card
          name="2000"
          onOrOff={false}
          brightness={false}
          temp={2000}
          color={false}
          cardClassName={"card"}
          buttonClassName={"lightButton"}
        />
      </div>
    </div>
  );
};
