import React, { Component } from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({
  tag: Tag,
  style,
  submit,
  link,
  children,
  secondary,
  ...props
}) => {
  const buttonClass = secondary ? styles.secondary : styles.primary;

  return (
    <>
      {link ? (
        <a
          className={buttonClass}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <button className={buttonClass} {...props}>
          {children}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  tag: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  tag: "button",
  style: "positive",
};

export default Button;
