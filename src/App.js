import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDataBase = {
  javascript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" }
  ],

  "Self-help": [
    {
      name: "Think Like A Monk",
      rating: "4/5"
    },
    {
      name: "Power of Habits",
      rating: "4.5/5"
    }
  ],

  fiction: [
    {
      name: "Dune novel",
      rating: "5/5"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5"
    }
  ],

  business: [
    {
      name: "Psycology of Money",
      rating: "3.5/5"
    },
    {
      name: "Think and Grow Rich",
      rating: "4/5"
    },
    {
      name: "Cashflow Quadrant",
      rating: "3.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 GoodReads </h1>
      <p style={{ fontSize: "small" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDataBase).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "skyblue",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid blue",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDataBase[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid green",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                background: "lightgreen",
                boxShadow: "5px 5px 10px green"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
