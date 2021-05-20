import { moviedata } from "./data";
import "./App.css";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "./components/filter/Filter";
import MovieList from "./components/movieList/MovieList";
import AddMovie from "./components/addMovie/AddMovie";
function App() {
  const [movielist, setMovielist] = useState(moviedata);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const ratingChanged = (note) => {
    setRate(note);
  };
  const handleAdd = (newMovie) => {
    setMovielist([...movielist,newMovie])
  }
  return (
    <div className="App">
      <Filter
        handleChange={handleChange}
        title={title}
        ratingChanged={ratingChanged}
        rate={rate}
      />
      <MovieList
        movielist={movielist.filter(
          (movie) =>
            movie.title.toUpperCase().includes(title.toUpperCase()) &&
            movie.rate >= rate
        )}
      />
      <AddMovie handleAdd={handleAdd} />
    </div>
  );
}

export default App;
