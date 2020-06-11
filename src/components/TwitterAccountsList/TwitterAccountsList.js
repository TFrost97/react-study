import React from "react";
import TwitterAccountsListElement from "./TwitterAccountsListElement/TwitterAccountsListElement";
import "./TwitterAccountsList.css";

const TwitterAccountsList = (props) => {
  return (
    <ul className="account__list">
      {props.twitterAccounts.map((twitterAccount) => {
        const { name, image, description, twitterLink } = twitterAccount;
        const target = "_blank";
        const rel = "noopener noreferrer";
        console.log(__filename);
        return (
          <li className="account" key={name}>
            <TwitterAccountsListElement
              name={name}
              image={image}
              link={twitterLink}
              desc={description}
              target={target}
              rel={rel}
              deleteTwitterAccount={props.deleteTwitterAccount}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TwitterAccountsList;
