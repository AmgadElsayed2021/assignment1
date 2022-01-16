import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Ratings } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/ratings" element={<Ratings />} />
      </Routes>
    </div>
  );
}
// function App() {
//   const [movies, setMovies] = useState(null);

//   useEffect(() => {
//     fetch("./movies.json")
//       .then((response) => response.json())
//       .then(setMovies);
//   }, []);
//   console.log(movies);

//   return (
//     <div className="App">
//       <h1 className="main-H1">Movie Reviews</h1>

//       <div className="mainDivStyle">
//         {movies.map((movie, i) => {
//           return <Movie info={movie}></Movie>;
//         })}
//       </div>
//     </div>
//   );
// }

// function Movie(props) {
//   return (
//     <div>
//       <div className="imgStyle">
//         <img
//           src={"./images/" + props.info.Poster}
//           alt={props.info.Title}
//           width={300}
//           height={400}
//         />
//       </div>
//       <div className="divStyle">
//         <div>
//           <h2>Movie Name: {props.info.Title}</h2>
//         </div>
//         <div className="movieBox">
//           {" "}
//           <p> Released: {props.info.Released}</p>
//         </div>
//         <div>
//           {" "}
//           <p>
//             Main Actors :{props.info.Actors[0]} ,{props.info.Actors[1]} ,
//             {props.info.Actors[2]} and {props.info.Actors[3]}
//           </p>
//         </div>
//         <div>
//           {" "}
//           <p>Movie Rating : {props.info.Rating}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
