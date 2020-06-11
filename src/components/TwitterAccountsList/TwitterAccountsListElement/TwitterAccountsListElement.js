import React from "react";
import "./TwitterAccountsListElement.css";

// destructuring props
const TwitterAccountsListElement = ({
  image,
  name,
  desc,
  target,
  rel,
  link,
  deleteTwitterAccount,
}) => (
  <>
    <div className="avatar">
      <img className="avatar__image" src={image} alt="Twitter Avatar" />
    </div>

    <div className="user-info">
      <div className="user-info__text">
        <h2 className="user-info__name">{name}</h2>
        <p className="user-info__desc">{desc}</p>
      </div>

      <div className="user-info__buttons">
        <a target={target} rel={rel} className="user-info__link" href={link}>
          Visit Twitter Page
        </a>

        <button
          className="user-info__delete"
          onClick={() => deleteTwitterAccount(name)}
        >
          Delete
        </button>
      </div>
    </div>
  </>
);

export default TwitterAccountsListElement;
