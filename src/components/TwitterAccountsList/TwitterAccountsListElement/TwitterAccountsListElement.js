import React from "react";
import styles from "./TwitterAccountsListElement.module.scss";
import Button from "../../Button/Button";

// destructuring props
const TwitterAccountsListElement = ({
  image,
  name,
  desc,
  target,
  rel,
  link,
  deleteTwitterAccount,
}) => (
  <>
    <div className={styles.avatar}>
      <img className={styles.avatar__image} src={image} alt="Twitter Avatar" />
    </div>

    <div className={styles.user}>
      <div className={styles.user__text}>
        <h2 className={styles.user__name}>{name}</h2>
        <p className={styles.user__desc}>{desc}</p>
      </div>

      <div className={styles.user__buttons}>
        {/* <a target={target} rel={rel} className={styles.user__link} href={link}>
          Visit Twitter Page
        </a> */}

        <Button tag="a" link={link}>
          Visit twitter page
        </Button>

        <Button style="negative" onClick={() => deleteTwitterAccount(name)}>
          Delete account
        </Button>
      </div>
    </div>
  </>
);

export default TwitterAccountsListElement;
