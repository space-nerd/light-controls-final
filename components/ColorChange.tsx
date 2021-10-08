import React from "react";
import "App.scss";
import { Card } from "./Card";

const ColorChange: React.FC<{}> = ({}) => {
  return (
    <div className={"container"}>
      <h1>Color Control</h1>

      <div className={styles.grid}>
        <Card
          name="White"
          onOrOff={false}
          brightness={false}
          temp={false}
          color={"#ffffff"}
          cardClassName={"card"}
          buttonClassName={"lightButton"}
        />

        <Card
          name="Blue"
          onOrOff={false}
          brightness={false}
          temp={false}
          color={"#0000ff"}
          cardClassName={"card"}
          buttonClassName={"lightButton"}
        />

        <Card
          name="Red"
          onOrOff={false}
          brightness={false}
          temp={false}
          color={"#ff0000"}
          cardClassName={"card"}
          buttonClassName={"lightButton"}
        />
        <Card
          name="Light Blue"
          onOrOff={false}
          brightness={false}
          temp={false}
          color={"#0066ff"}
          cardClassName={"card"}
          buttonClassName={"lightButton"}
        />

        <Card
          name="Purple"
          onOrOff={false}
          brightness={false}
          temp={false}
          color={"#ff00ff"}
          cardClassName={"card"}
          buttonClassName={"lightButton"}
        />
        <Card
          name="Pink"
          onOrOff={false}
          brightness={false}
          temp={false}
          color={"#ff0066"}
          cardClassName={"card"}
          buttonClassName={"lightButton"}
        />

        <Card
          name="Aqua"
          onOrOff={false}
          brightness={false}
          temp={false}
          color={"#00ffff"}
          cardClassName={"card"}
          buttonClassName={"lightButton"}
        />

        <Card
          name="Green"
          onOrOff={false}
          brightness={false}
          temp={false}
          color={"#00ff00"}
          cardClassName={"card"}
          buttonClassName={"lightButton"}
        />
      </div>
    </div>
  );
};

export default ColorChange;
