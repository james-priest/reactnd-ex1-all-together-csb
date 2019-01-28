import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput";
import UserList from "./UserList";

class App extends Component {
  state = {
    // users: []
    users: [
      { fname: "james", lname: "priest", username: "jpriest", games: 0 },
      { fname: "mary", lname: "jane", username: "mj4ever", games: 0 }
    ]
  };
  saveUser = user => {
    console.log(user);
    this.setState(prevState => ({
      users: [...prevState.users, user]
    }));
  };
  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
          <p>Exercise 1 - All Together</p>
        </header>
        <main className="App-main">
          <h2>User Game List</h2>
          <div className="container">
            <UserInput users={users} saveUser={this.saveUser} />
            <UserList users={users} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
