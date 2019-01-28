import React from "react";

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

export default GameToggle;
