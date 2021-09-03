import React from "react";
import styles from "../styles/Home.module.scss";
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

interface DeviceStateProps {
  deviceName: string;
}

export const DeviceState: React.FC<DeviceStateProps> = ({ deviceName }) => {
  Lamp.getState().then((state) => {
    //const hasPower = state.data.propertiers[0].online;
    //console.log(hasPower);
    //return hasPower;
  });

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.deviceState}>
          <h3>{deviceName}</h3>
          <ul id="onlineStatus">
            <li>
              <h5>{}</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
