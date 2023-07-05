import Searchpic from './Searchpic.png';
import MovieCard from './MovieCard';
import './Movies.css';
import React, { useEffect, useState } from 'react'

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const Movies = () => {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("searchterm");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieFlix</h1>
      <p>made by <b>Deepak kumar</b></p>

      <div className="search">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={Searchpic}
          alt="search"
          onClick={() => searchMovies(searchText)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
 
export default Movies;