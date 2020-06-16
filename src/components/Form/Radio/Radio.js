import React from "react";
import styles from "./Radio.module.scss";

const Radio = ({ types, children, radioOnChangeFn, active }) => {
  return (
    <>
      <label htmlFor={types}>
        <input
          id={types}
          type="radio"
          checked={active === types}
          onChange={() => radioOnChangeFn(types)}
        />
        {children}
        <span></span>
      </label>
    </>
  );
};

export default Radio;
