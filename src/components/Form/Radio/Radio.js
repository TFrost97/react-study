import React from "react";
import styles from "./Radio.module.scss";

const Radio = () => {
  return (
    <label for={types.twitter}>
      <input
        id={types.twitter}
        type="radio"
        checked={this.state.activeOption === types.twitter}
        onChange={() => this.handleRadioButtonChange(types.twitter)}
      />
      Twitter
    </label>
  );
};
