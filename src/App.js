import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    users: []
  };
  saveUser = user => {
    console.log(user);
    this.setState(prevState => ({
      users: [...prevState.users, user]
    }));
  };
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
            <UserInput saveUser={this.saveUser} />
            <UserList />
          </div>
        </main>
      </div>
    );
  }
}

class UserInput extends Component {
  state = {
    fname: "",
    lname: "",
    username: ""
  };
  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(e.target.name);
    this.setState({
      [name]: value
    });
  };
  fieldsAreValid = e => {
    const { fname, lname, username } = this.state;
    const valid = fname.length > 0 && lname.length > 0 && username.length > 0;
    return valid;
  };
  addUser = e => {
    e.preventDefault();
    console.log("saving...");
    // const { fname, lname, username } = this.state;
    // this.props.saveUser({ fname, lname, username });
    this.props.saveUser({ ...this.state });
  };
  render() {
    const { fname, lname, username } = this.state;
    return (
      <div>
        <h3>Add User</h3>
        <form onSubmit={this.addUser}>
          <label>
            First Name:
            <input
              name="fname"
              type="text"
              value={fname}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              name="lname"
              type="text"
              value={lname}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <label>
            Username:
            <input
              name="username"
              type="text"
              value={username}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <button disabled={!this.fieldsAreValid()}>Add</button>
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
