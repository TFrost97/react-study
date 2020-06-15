import React from "react";
import Button from "../Button/Button";
import HeaderNavigation from "./HeaderNavigation";
import styles from "./Header.module.scss";
import logoImage from "../../assets/logo/internet.png";

const Header = ({ openModalFn }) => {
  console.log(openModalFn);
  return (
    <header className={styles.wrapper}>
      <img className={styles.logo} src={logoImage} alt="logo" />
      <HeaderNavigation />
      <Button secondary onClick={() => openModalFn()}>
        new item
      </Button>
    </header>
  );
};

export default Header;
