import React from "react";
import styles from "./TwitterAccountsListElement.module.scss";

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
        <a target={target} rel={rel} className={styles.user__link} href={link}>
          Visit Twitter Page
        </a>

        <button
          className={styles.user__delete}
          onClick={() => deleteTwitterAccount(name)}
        >
          Delete
        </button>
      </div>
    </div>
  </>
);

export default TwitterAccountsListElement;
