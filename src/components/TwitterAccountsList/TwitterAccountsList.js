import React from "react";
import TwitterAccountsListElement from "./TwitterAccountsListElement/TwitterAccountsListElement";
import styles from "./TwitterAccountsList.module.scss";

const TwitterAccountsList = (props) => {
  return (
    <ul className={styles.account__list}>
      {props.twitterAccounts.map((twitterAccount) => {
        const { name, image, description, twitterLink } = twitterAccount;
        const target = "_blank";
        const rel = "noopener noreferrer";
        console.log(__filename);
        return (
          <li className={styles.account} key={name}>
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
