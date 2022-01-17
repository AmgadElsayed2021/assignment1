import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

export function Home() {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("./movies.json")
      .then((response) => response.json())
      .then(setMovies);
  }, []);
  // console.log(movies);

  return (
    <div className="App">
      <Header />

      <div className="mainDivStyle">
        {movies.map((movie, i) => {
          return (
            <Movie
              key={i}
              title={movie.Title}
              actors={movie.Actors}
              poster={movie.Poster}
              rating={movie.Rating}
              release={movie.Released}
            ></Movie>
          );
        })}
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
function Movie(props) {
  return (
    <div className="movie-frame">
      <div className="imgStyle">
        <img
          className="poster"
          src={"./images/" + props.poster}
          alt={props.title}
          width={300}
          height={400}
        />
      </div>
      <div className="divStyle">
        <div>
          <h2>Movie Name: {props.title}</h2>
        </div>
        <div className="movieBox">
          <p> Released: {props.release}</p>
        </div>
        <div>
          <p>
            Main Actors :{props.actors[0]} ,{props.actors[1]} ,{props.actors[2]}
            and {props.actors[3]}
          </p>
        </div>
        <div>
          <p>Movie Rating : {props.rating}</p>
        </div>
      </div>
      <div className="remove-btn">
        <button>Remove</button>
      </div>
    </div>
  );
}
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
