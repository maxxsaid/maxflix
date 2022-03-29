import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  // code which runs based on a specific condition/variable
  useEffect(() => {
    // if [], run once when the row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(fetchURL);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* several row__poster(s) */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* container -> posters */}
    </div>
  );
}

export default Row;
