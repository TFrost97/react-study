import React from "react";
import "./TwitterAccountsListElement.css";

const TwitterAccountsListElement = (props) => (
  <>
    <div className="avatar">
      <img className="avatar__image" src={props.image} alt="Twitter Avatar" />
    </div>

    <div className="user-info">
      <div className="user-info__text">
        <h2 className="user-info__name">{props.name}</h2>
        <p className="user-info__desc">{props.desc}</p>
      </div>

      <div className="user-info__buttons">
        <a
          target={props.target}
          rel={props.rel}
          className="user-info__link"
          href={props.link}
        >
          Visit Twitter Page
        </a>

        <button
          className="user-info__delete"
          onClick={() => props.deleteTwitterAccount(props.name)}
        >
          Delete
        </button>
      </div>
    </div>
  </>
);

export default TwitterAccountsListElement;
