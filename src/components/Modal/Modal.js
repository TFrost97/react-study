import React from "react";
import styles from "./Modal.module.scss";
import Form from "../Form/Form";
import MyContext from "../../context";

const Modal = ({ closeModalFn }) => {
  return (
    // <MyContext.Consumer>
    //   {(el) => (
    <div className={styles.wrapper}>
      <button onClick={closeModalFn} className={styles.closeBtn}>
        x
      </button>
      <Form></Form>
    </div>
    // )}
    // </MyContext.Consumer>
  );
};
export default Modal;
