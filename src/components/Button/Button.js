import React, { Component } from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({ tag: Tag, style, submit, link, children }) => (
  <>
    {link ? (
      <a
        className={
          style === "negative"
            ? styles.button__negative
            : styles.button__positive
        }
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ) : (
      <button
        className={
          style === "negative"
            ? styles.button__negative
            : styles.button__positive
        }
      >
        {children}
      </button>
    )}
  </>

  // <Tag
  //   className={
  //     style === "negative" ? styles.button__negative : styles.button__positive
  //   }
  //   // for type <button>
  //   type={(submit === true) & (Tag === "button") ? "submit" : ""}
  //   // for type <a>

  //   href={Tag == "a" ? link : ""}
  //   target="_blank"
  //   rel="noopener noreferrer"
  // >
  //   {/* children inject text to button */}
  //   {children}
  // </Tag>
);

Button.propTypes = {
  tag: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  tag: "button",
  style: "positive",
};

export default Button;
