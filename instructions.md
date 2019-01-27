# Instructions

For this exercise, imagine that you're building a section of a simple video game website where we should be able to add users and display users, along with the number of games he/she has played.

## Requirements

Create a React app that lets us add a user's first name, last name, and username. When the user is added, the number of games that he/she has played is defaulted to 0. Each username has to be unique, so we cannot add multiple users with the same username. When someone clicks "Add" but the username already exists, the app should not allow for a duplicate user to be added and should show an error message instead.

The app should also display a list of users, specifically their usernames and the number of games they've played (which is defaulted to 0). If someone tries to add a user when one of the fields is empty, the "Add" button should be disabled.

We should also have a button that lets us toggle between showing and hiding the number of games the users have played. For example, the button can start out as "Hide the Number of Games Played" and the app can display "username1 played 0 games." Clicking that button should change the button text to "Show the Number of Games Played" and the displayed username and score can be changed to "username1 played \* games."

## Guidelines

State management is at the heart of React. It allows us to have a single source of truth for our entire application. That means that we don't need to make sure that our data is synched across multiple components; React does it for us. It happens via unidirectional data flow: parent components pass properties to child components as props.

Remember that state cannot be modified outside of the component in which it is declared. If a child component needs to pass some data back up to the parent (e.g. a form that conveys the new user information to the component that holds that the users piece of state), we'll need to pass callbacks from the component that holds state all the way down to the required component. By calling those callbacks, child components are able to pass data to back up to their parents, which are able to modify their state. Props can go through multiple components to get to the component they ultimately need to reach.
