import React, { useState } from "react";
import "./styles.css";

var scifiMoviesObject = {
  "Iron Man ": "5/5",
  "Batman ": "4.5/5",
  "Lord of the rings ": "4/5"
};

var showsObject = {
  "Money Hiest": "5/5",
  "F.R.I.E.N.D.S": "4.5/5",
  "Breaking Bad": "5/5"
};

var actionMoviesObject = {
  "Die Hard": "3.5/5",
  "Mission Impossible": "4/5",
  "John Wick": "4.8/5"
};
var scifiNames = Object.keys(scifiMoviesObject);
var scifiRating = Object.values(scifiMoviesObject);

var showsNames = Object.keys(showsObject);
var showsRating = Object.values(showsObject);

var actionNames = Object.keys(actionMoviesObject);
var actionRating = Object.values(actionMoviesObject);

export default function App() {
  var [names, setNames] = useState(" ");
  var [ratings, setRatings] = useState(" ");

  function scifiClickHandler() {
    var names = scifiNames;
    var ratings = scifiRating;
    setNames(names);
    setRatings(ratings);
  }

  function showsClickHandler() {
    var names = showsNames;
    var ratings = showsRating;
    setNames(names);
    setRatings(ratings);
  }

  function actionClickHandler() {
    var names = actionNames;
    var ratings = actionRating;
    setNames(names);
    setRatings(ratings);
  }

  return (
    <div className="App">
      <h1 style={{ fontSize: "large", fontWeight: "bold" }}>
        🍿Binge-Worthy🎬🍿
      </h1>
      <p>Best shows and movies according to me!.Select Genre to get started</p>
      <button
        className="buttonstyle"
        onClick={() => scifiClickHandler()}
        style={{ padding: "1rem", margin: "1rem" }}
      >
        Sci-Fi
      </button>
      <button
        className="buttonstyle"
        onClick={() => showsClickHandler()}
        style={{ padding: "1rem", margin: "1rem" }}
      >
        Shows
      </button>
      <button
        className="buttonstyle"
        onClick={() => actionClickHandler()}
        style={{ padding: "1rem", margin: "1rem" }}
      >
        Action
      </button>

      <ul style={{ listStyle: "none" }}>
        {names.map(function (name, index) {
          return (
            <div className="divstyle">
              <li key={index}>
                {name}
                <small>{ratings[index]}</small>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
