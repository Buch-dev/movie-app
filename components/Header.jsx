"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getTrendingMovies } from "@/utils/request";
import Nav from "./Nav";
import { baseUrl } from "@/utils/constant";

function Header() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const movies = await getTrendingMovies();

        // Check if the response contains valid movie data
        if (Array.isArray(movies) && movies.length > 0) {
          setTrendingMovies(movies);

          // Choose a random movie from the trending movies
          const randomIndex = Math.floor(Math.random() * movies.length);
          const randomMovie = movies[randomIndex];
          setMovie(randomMovie);
        } else {
          // Handle the case where the API response is not as expected
          setError("Invalid API response: No valid movie data found.");
        }
      } catch (error) {
        console.error("Error fetching trending movies:", error);
        setError("Error fetching trending movies. Please try again later.");
      }
    }

    fetchTrendingMovies();
  }, []);

  // Define inline style for the background image
  const backgroundImageStyle = {
    backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="">
      {/* Apply the inline style to the container div */}
      <div style={backgroundImageStyle} className="bg-custom-image">
      <Nav />
        {/* <div className="w-screen -z-10 absolute top-0">
          {movie && (
            <Image
              src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
              className="h-[600px] w-screen"
              alt={movie.title}
              width={1440}
              height={600}
            />
          )}
        </div> */}
        <div className="container pb-[157px] mt-32">
          {movie && (
            <div className="movie-title text-5xl mt-[100px] text-white font-bold">
              {movie.title}
            </div>
          )}
          {movie && (
            <div className="details my-4 flex">
              {/* Add movie details here */}
            </div>
          )}
          {movie && (
            <p className="text-white text-sm font-medium w-[302px]">
              {movie.overview}
            </p>
          )}
          {error && <p className="text-red-500">Error: {error}</p>}
          <button className="flex items-center bg-[#BE123C] py-[6px] px-4 mt-4 rounded-md">
          <Image src="/img/Play.png" alt="play" width={20} height={20} />
          <p className="text-white uppercase ml-2">Watch trailer</p>
        </button>
        </div>
        
      </div>
    </div>
  );
}

export default Header;
