import React, { Component } from "react";
import "./App.css";
import TwitterAccountsList from "./components/TwitterAccountsList/TwitterAccountsList";
import { twitterAccountsData } from "./localData/twitterAccountsData";
import Form from "./components/Form/Form";
import person from "./assets/images/person.png";

class App extends Component {
  initialState = [...twitterAccountsData];

  state = {
    twitterAccounts: [...this.initialState],
  };

  // addDummyImg = (image) => {
  //   if (image.length == 0) {
  //     image = person;
  //     return image;
  //   } else {
  //     return image;
  //   }
  // };

  addNewTwitterAccount = (e) => {
    e.preventDefault();

    const { twitterAccounts } = this.state;

    const newTwitterAccount = {
      name: e.target.name.value,
      image: e.target.image.value,
      description: e.target.desc.value,
      twitterLink: e.target.link.value,
    };

    // if image input is empty ->  add dummy avatar
    // image = this.addDummyImg(image);

    // clear input
    // for (const inputText of e.target) {
    //   inputText.value = "";
    // }

    this.setState((prevState) => ({
      twitterAccounts: [...prevState.twitterAccounts, newTwitterAccount],

      // twitterAccounts = {
      //   prevState {

      //   }

      //   newTwitterAccount {

      //   }
      // }
    }));

    // add new account to the state
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

    e.target.reset();
  };

  deleteTwitterAccount = (name) => {
    const filteredTwitterAccounts = this.state.twitterAccounts.filter(
      (twitterAccount) => twitterAccount.name !== name
    );

    this.setState({
      twitterAccounts: [...filteredTwitterAccounts],
    });
  };

  render() {
    
    return (
      <div className="App">
        <h1>Twitter Accounts List:</h1>
        <TwitterAccountsList
          twitterAccounts={this.state.twitterAccounts}
          deleteTwitterAccount={this.deleteTwitterAccount}
        />
        <Form submitFn={this.addNewTwitterAccount} />
      </div>
    );
  }
}

export default App;

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
