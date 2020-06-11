import React from "react";
import styles from "./Form.module.scss";

const Form = (props) => (
  <div className={styles.form}>
    <h2 className={styles.form__title}>Add new twitter account</h2>
    <form className={styles.form__body} onSubmit={props.submitFn}>
      <input
        className={styles.form__input}
        type="text"
        name="name"
        placeholder="Name"
        required
      />
      <input
        className={styles.form__input}
        type="text"
        name="link"
        placeholder="Link"
      />
      <input
        className={styles.form__input}
        type="text"
        name="image"
        placeholder="Image"
      />
      <textarea
        className={styles.form__input}
        type="text"
        name="desc"
        cols="30"
        rows="10"
        placeholder="Description"
      />
      <button className={styles.form__button} type="submit">
        add new item
      </button>
    </form>
  </div>
);

export default Form;
