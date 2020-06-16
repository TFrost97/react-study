import React from "react";
import styles from "./Form.module.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Radio from "./Radio/Radio";

import MyContext from "../../context";

const types = {
  twitter: "twitter",
  article: "article",
  note: "note",
};

class Form extends React.Component {
  state = {
    title: "",
    link: "",
    image: "",
    desc: "",
    type: types.twitter,
  };

  handleRadioButtonChange = (type) => {
    this.setState({
      type: type,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { type } = this.state;
    return (
      <MyContext.Consumer>
        {(context) => (
          <>
            <div className={styles.form}>
              <h2 className={styles.form__title}>Add new {type}</h2>
              <form className={styles.form__body} onSubmit={context.addItemFn}>
                <div className={styles.radioWrapper}>
                  <Radio
                    types={types.twitter}
                    active={type}
                    radioOnChangeFn={this.handleRadioButtonChange}
                  >
                    Twitter
                  </Radio>
                  <Radio
                    types={types.article}
                    active={type}
                    radioOnChangeFn={this.handleRadioButtonChange}
                  >
                    Article
                  </Radio>

                  <Radio
                    types={types.note}
                    active={type}
                    radioOnChangeFn={this.handleRadioButtonChange}
                  >
                    Note
                  </Radio>
                </div>

                <Input
                  onChange={this.handleInputChange}
                  value={this.state.title}
                  name="title"
                  placeholder={
                    type === types.twitter ? "Twitter Name" : "Title"
                  }
                  required
                />
                {type === types.note ? null : (
                  <Input
                    onChange={this.handleInputChange}
                    value={this.state.link}
                    name="link"
                    placeholder={
                      type === types.twitter ? "Twitter Link" : "Link"
                    }
                  />
                )}

                {type === types.twitter ? (
                  <Input
                    onChange={this.handleInputChange}
                    value={this.state.image}
                    name="image"
                    placeholder="Image"
                  />
                ) : null}
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.desc}
                  textarea
                  name="desc"
                  // cols="30"
                  // rows="10"
                  placeholder="Description"
                />
                <Button
                  onClick={(e) => context.addItemFn(e, this.state)}
                  submit={true}
                >
                  Add new item
                </Button>
              </form>
            </div>
          </>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Form;
