import React, { useState } from "react";
import "./styles.css";
var bingeWorthy = {
  "Sci-Fi": [
    {
      name: "IronMan",
      rating: "5/5"
    },
    {
      name: "Predestination",
      rating: "4.8/5"
    },
    {
      name: "Interstellar",
      rating: "4.9/5"
    }
  ],
  Action: [
    {
      name: "John Wick",
      rating: "4.3/5"
    },
    {
      name: "Gemini Man",
      rating: "4.7/5"
    },
    {
      name: "Django Unchained",
      rating: "4.3/5"
    }
  ],

  Shows: [
    {
      name: "F.R.I.E.N.D.S",
      rating: "5/5"
    },
    {
      name: "Money Hiest",
      rating: "4.6/5"
    },
    {
      name: "Breaking Bad",
      rating: "4.9/5"
    }
  ]
};

export default function App() {
  var [currentWatch, setcurrentWatch] = useState("Action");

  function buttonOnClickHandler(genre) {
    setcurrentWatch(genre);
  }
  return (
    <div className="App">
      <h1 style={{ fontSize: "large", fontWeight: "bold" }}>
        🍿Binge-Worthy🎬🍿
      </h1>
      <div>
        <p>
          Best shows and movies according to me!.Select Genre to get started
        </p>
        {Object.keys(bingeWorthy).map((genre) => (
          <button
            className="buttonStyle"
            onClick={() => buttonOnClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />

      <div>
        <ul className="list">
          {bingeWorthy[currentWatch].map((movies) => (
            <div className="divstyle">
              <li className="items">
                <div>Name: {movies.name}</div>
                <div>Rating: {movies.rating}</div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
