import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
          <p>Exercise 1 - All Together</p>
        </header>
        <main className="App-main">
          <div className="container">
            <h2>User Game List</h2>
            <UserInput />
            <UserList />
          </div>
        </main>
      </div>
    );
  }
}

class UserInput extends Component {
  render() {
    return (
      <div>
        <h3>Add User</h3>
        <form action="">
          <label for="fname">First Name: </label>
          <input id="fname" type="text" />
          <br />
          <label for="lname">Last Name: </label>
          <input id="lname" type="text" />
          <br />
          <label for="username">Username: </label>
          <input id="username" type="text" />
          <br />
          <button disabled="true">Add</button>
        </form>
      </div>
    );
  }
}

function UserList(props) {
  return (
    <div>
      <h3>Users</h3>
      <User />
      <GameToggle />
    </div>
  );
}

function User(props) {
  return <div>User 1</div>;
}

function GameToggle(props) {
  return <button>Toggle</button>;
}

export default App;
