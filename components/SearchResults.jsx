"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";

const SearchResults = ({ searchText, movies }) => {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const filterMovies = filter => {
    let sortedMovies = [];
    switch (filter) {
      case "release_date":
        sortedMovies = [
          ...movies.sort(
            (a, b) => new Date(b.release_date) - new Date(a.release_date)
          ),
        ];
        break;

      case "popularity":
        sortedMovies = [
          ...movies.sort(
            (a, b) => new Date(b.popularity) - new Date(a.popularity)
          ),
        ];
        break;

      case "vote_average":
        sortedMovies = [
          ...movies.sort(
            (a, b) => new Date(b.vote_average) - new Date(a.vote_average)
          ),
        ];
        break;

      default:
        break;
    }
    setFilteredMovies(sortedMovies);
  };

  return (
    <div>
      <div className="container py-4">
        <h1>Top Search Results for &quot;{searchText}&quot;</h1>
        <select className="px-4 py-2 mt-3 rounded" onChange={e => filteredMovies(e.target.value)}>
          <option value="">Sort By</option>
          <option value="release_date" className="px-4 py-2">release year</option>
          <option value="popularity" className="px-4 py-2">popularity</option>
          <option value="vote_average" className="px-4 py-2">ratings</option>
        </select>
      </div>
      <div className="grid md:grid-cols-4 gap-4 mt-10 container">
        {filteredMovies.map(movie => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default SearchResults;
