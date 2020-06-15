import React from "react";
import styles from "./Input.module.scss";

const Input = ({ textarea, ...props }) => {
  return (
    <>
      {textarea ? (
        <textarea className={styles.input} {...props}></textarea>
      ) : (
        <input className={styles.input} type="text" {...props} />
      )}
    </>
  );
};

export default Input;
