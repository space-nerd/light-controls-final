import React from "react";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";
import NextLink from "next/link";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const router = useRouter();
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <NextLink href="/Brightness">
          <button className={styles.navButton}>Brightness</button>
        </NextLink>

        <NextLink href="/ColorChange">
          <button className={styles.navButton}>Color</button>
        </NextLink>

        <NextLink href="/Temp">
          <button className={styles.navButton}>Temp</button>
        </NextLink>

        <NextLink href="/DeviceState">
          <button className={styles.navButton}>Devices</button>
        </NextLink>
      </nav>
    </div>
  );
};
