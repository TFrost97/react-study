import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyContext from "../../context";
import styles from "./Root.module.scss";
// import TwitterAccountsList from "../../components/TwitterAccountsList/TwitterAccountsList";
// import { twitterAccountsData } from "../../localData/twitterAccountsData";
// import Form from "../../components/Form/Form";
// import Button from "../../components/Button/Button";
// import person from "./assets/images/person.png";

import TwittersView from "../TwittersView/TwittersView";
import ArticlesView from "../ArticlesView/ArticlesView";
import NotesView from "../NotesView/NotesView";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";

class Root extends Component {
  // initialState = [...twitterAccountsData];

  state = {
    // twitterAccounts: [...this.initialState],

    twitter: [],
    article: [],
    note: [],

    isModalOpen: true,
  };

  // filter which radio button is checked

  addNewItem = (e, newItem) => {
    e.preventDefault();
    console.log(newItem.title);
    this.setState((prevState) => ({
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));

    // e.target.reset();
    this.closeModal();
  };

  handleChange = () => {};

  // filter on data and filter all data except with clicked
  deleteTwitterAccount = (name) => {
    const filteredTwitterAccounts = this.state.twitterAccounts.filter(
      (twitterAccount) => twitterAccount.name !== name
    );

    this.setState({
      twitterAccounts: [...filteredTwitterAccounts],
    });
  };

  openModal = () => {
    this.setState(() => ({
      isModalOpen: true,
    }));
  };

  closeModal = () => {
    const bebok = "bebok";
    this.setState(() => ({
      isModalOpen: false,
    }));
  };

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItemFn: this.addNewItem,
    };
    return (
      <BrowserRouter>
        <MyContext.Provider value={contextElements}>
          <>
            <Header openModalFn={this.openModal} />
            <h1>hello world</h1>

            <Switch>
              <Route exact path="/" component={TwittersView} />
              <Route path="/articles" component={ArticlesView} />
              <Route path="/notes" component={NotesView} />
            </Switch>
            {isModalOpen && <Modal closeModalFn={this.closeModal} />}
          </>
        </MyContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;

// Komponent Funkcyjny
// const App = () => {
//   return (
//     <div className="App">
//       <h1>Twitter Accounts List:</h1>
//       <TwitterAccountsList />
//     </div>
//   );
// };

// Komponent clasowy z caounterem
// class App extends Component {
//   state = {
//     counter: 0,
//     number: 1000,
//   };

//   addCounter = () => {
//     this.setState({
//       counter: this.state.counter + 1,
//       number: 2000,
//     });
//   };

//   minusCounter = () => {
//     this.setState({
//       counter: this.state.counter - 1,
//     });
//   };

//   render() {
//     return (
//       <>
//         <button onClick={this.minusCounter}>-</button>
//         <h1>{this.state.counter}</h1>
//         <button onClick={this.addCounter}>+</button>
//       </>
//     );
//   }
// }

// *OLD VERSION addDummyImg = (image) => {
//   if (image.length == 0) {
//     image = person;
//     return image;
//   } else {
//     return image;
//   }
// };

// *OLD VERSION clear input
// for (const inputText of e.target) {
//   inputText.value = "";
// }

// *OLD VERSION if image input is empty ->  add dummy avatar
// image = this.addDummyImg(image);

// *OLD VERSION add new account to the state
// this.setState(
//   {
//     twitterAccounts: [
//       ...twitterAccounts,
//       {
//         image,
//         name,
//         twitterLink,
//         description,
//       },
//     ],
//   },
//   () => {
//     console.log("callback przy render");
//   }
// );
