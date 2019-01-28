import React, { Component } from "react";
import "./App.css";

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

class UserInput extends Component {
  state = {
    fname: "",
    lname: "",
    username: "",
    games: 0,
    unique: true
  };
  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(e.target.name);
    this.setState({
      [name]: value,
      unique: true
    });
  };
  fieldsAreValid = e => {
    const { fname, lname, username } = this.state;
    const valid = fname.length > 0 && lname.length > 0 && username.length > 0;
    return valid;
  };
  addUser = e => {
    e.preventDefault();
    console.log(this.props.users);
    console.log(this.state.username);
    // const { fname, lname, username } = this.state;
    // this.props.saveUser({ fname, lname, username });
    if (
      this.props.users.filter(user => user.username === this.state.username)
        .length > 0
    ) {
      console.log("already taken");
      this.setState({ unique: false });
    } else {
      this.setState({ unique: true });
      this.props.saveUser({ ...this.state });
    }
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
              className="form-element"
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
              className="form-element"
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
              className={
                !this.state.unique ? "form-element error" : "form-element"
              }
            />
            {!this.state.unique && (
              <span className="red">Username must be unique!</span>
            )}
          </label>
          <br />
          <button disabled={!this.fieldsAreValid()}>Add</button>
        </form>
      </div>
    );
  }
}

class UserList extends Component {
  state = {
    hide: false
  };
  toggleGames = () => {
    console.log(this.state.hide);
    this.setState(prevState => ({
      hide: !prevState.hide
    }));
  };
  render() {
    const { users } = this.props;
    const { hide } = this.state;
    return (
      <div>
        <h3>Users</h3>
        {users.length > 0 && (
          <table>
            <thead>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Username</td>
              <td>Games</td>
            </thead>
            <tbody>
              {users.map(user => (
                <User key={user.username} user={user} hide={hide} />
              ))}
            </tbody>
          </table>
        )}
        <GameToggle toggleGames={this.toggleGames} hide={hide} />
      </div>
    );
  }
}

function User(props) {
  const { fname, lname, username, games } = props.user;

  return (
    <tr>
      <td>{fname}</td>
      <td>{lname}</td>
      <td>{username}</td>
      <td>
        {username} played {props.hide ? "*" : games} games
      </td>
    </tr>
  );
}

function GameToggle(props) {
  const { hide } = props;
  return (
    <button onClick={props.toggleGames}>
      {hide
        ? "Show the Number of Games Played"
        : "Hide the Number of Games Played"}
    </button>
  );
}

export default App;
