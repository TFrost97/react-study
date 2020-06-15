import React from "react";
import styles from "./Form.module.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";

const types = {
  twitter: "twitter",
  article: "article",
  note: "note",
};

class Form extends React.Component {
  state = {
    activeOption: types.twitter,
  };

  handleRadioButtonChange = (type) => {
    this.setState({
      activeOption: type,
    });
  };

  render() {
    return (
      <div className={styles.form}>
        <h2 className={styles.form__title}>
          Add new {this.state.activeOption}
        </h2>
        <form className={styles.form__body} onSubmit={this.props.submitFn}>
          <label for={types.twitter}>
            <input
              id={types.twitter}
              type="radio"
              checked={this.state.activeOption === types.twitter}
              onChange={() => this.handleRadioButtonChange(types.twitter)}
            />
            Twitter
          </label>

          <input
            id={types.article}
            type="radio"
            checked={this.state.activeOption === types.article}
            onChange={() => this.handleRadioButtonChange(types.article)}
          />
          <label htmlFor={types.article}>Article</label>

          <input
            id={types.note}
            type="radio"
            checked={this.state.activeOption === types.note}
            onChange={() => this.handleRadioButtonChange(types.note)}
          />
          <label for={types.note}>note</label>

          <Input name="name" placeholder="Name" required />
          <Input name="link" placeholder="Link" />
          <Input name="image" placeholder="Image" />
          <Input
            textarea
            name="desc"
            cols="30"
            rows="10"
            placeholder="Description"
          />
          <Button submit={true}>Add new item</Button>
        </form>
      </div>
    );
  }
}

export default Form;
