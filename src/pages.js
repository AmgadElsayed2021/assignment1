import React from "react";
import { Link } from "react-router-dom";
// import { Form, Button } from "semantic-ui-react";
// import jsonfile from "jsonfile";
// import "./index.css";

export function Ratings() {
  return (
    <>
      <Header />
      <section>
        <MovieForm />
      </section>
    </>
  );
}

export function Home({ movies = [], onRemoveMovie = (f) => f }) {
  // console.log(movies);

  return (
    <div className="App">
      <Header />

      <div className="mainDivStyle">
        {movies.map((movie, i) => (
          <Movie
            // {...movie}
            key={i}
            Title={movie.Title}
            Actors={movie.Actors}
            Poster={movie.Poster}
            Rating={movie.Rating}
            Release={movie.Released}
            onRemove={onRemoveMovie}
          ></Movie>
        ))}
      </div>
    </div>
  );
}
function Header() {
  return (
    <header>
      <nav>
        <div className="nav-main">
          <div className="nav-div">
            <Link to="/">Movie Review</Link>
          </div>
          <div className="nav-div">
            <Link to="ratings">Ratings</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default function Movie({
  Title,
  Poster,
  Released,
  Actors,
  Rating,
  onRemove = (f) => f,
}) {
  // console.log(props);
  return (
    <div className="movie-frame">
      <div className="imgStyle">
        <img
          className="poster"
          src={"./images/" + Poster}
          alt={Title}
          width={300}
          height={400}
        />
      </div>
      <div className="divStyle">
        <div>
          <h2>Movie Name: {Title}</h2>
        </div>
        <div className="movieBox">
          <p> Released: {Released}</p>
        </div>
        <div>
          <p>
            Main Actors :{Actors[0]} ,{Actors[1]} ,{Actors[2]}
            and {Actors[3]}
          </p>
        </div>
        <div>
          <p>Movie Rating : {Rating}</p>
        </div>
      </div>
      <div className="remove-btn">
        <button
          className="delete"
          onClick={() => {
            onRemove(Title);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
//
function MovieForm() {
  return (
    <form action="">
      <div className="review-form">
        <div className="input-outer-container">
          <div className="input-inner">
            <label for="title">Movie Title:</label>
          </div>
          <div className="input-inner">
            <input type="text" id="title" name="title" />
          </div>
        </div>

        <div className="input-outer-container">
          <div className="input-inner">
            <label for="Actors">Actors:</label>
          </div>{" "}
          <div className="input-inner">
            <input type="text" id="movie-actors" name="movie-actors"></input>
          </div>
        </div>
        <div className="input-outer-container">
          <div className="input-inner">
            <label for="release-date">Release Date:</label>
          </div>{" "}
          <div className="input-inner">
            <input type="date" id="releaseDate" name="release-date"></input>
          </div>
        </div>
        <div className="input-outer-container">
          {" "}
          <div className="input-inner">
            <label for="movie-rating">Rating:</label>
          </div>{" "}
          <div className="input-inner">
            <input
              type="number"
              id="movie-rating"
              name="movie-rating"
              min={1}
              max={5}
            ></input>
          </div>
        </div>
        <div className="input-outer-container">
          {" "}
          <div className="input-inner">
            <label for="movie-poster">Movie Poster:</label>
          </div>{" "}
          <div className="input-inner">
            <input
              type="file"
              multiple
              accept=" image/*"
              id="movie-poster"
            ></input>
          </div>
        </div>

        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}
