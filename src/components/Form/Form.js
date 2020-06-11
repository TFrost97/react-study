import React from "react";
import "./Form.css";

const Form = (props) => (
  <div className="form">
    <h2 className="form__title">Add new twitter account</h2>
    <form className="form__body" onSubmit={props.submitFn}>
      <input
        className="form__input"
        type="text"
        name="name"
        placeholder="Name"
        required
      />
      <input
        className="form__input"
        type="text"
        name="link"
        placeholder="Link"
      />
      <input
        className="form__input"
        type="text"
        name="image"
        placeholder="Image"
      />
      <textarea
        className="form__input"
        type="text"
        name="desc"
        cols="30"
        rows="10"
        placeholder="Description"
      />
      <button className="form__button" type="submit">
        add new item
      </button>
    </form>
  </div>
);

export default Form;
