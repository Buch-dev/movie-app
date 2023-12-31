"use client";

import { AiOutlineHeart } from 'react-icons/ai';
import Link from 'next/link';
import { useState } from 'react';

const Card = ({ movie }) => {
  const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prevFavorite) => !prevFavorite);
  };

  // Function to convert release date to UTC format
  const formatReleaseDate = (releaseDate) => {
    const date = new Date(releaseDate);
    return date.toLocaleDateString("en-US", {
      timeZone: "UTC",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };

  return (
    <div className={`relative ${isFavorite ? 'bg-gold' : 'bg-white'}`}>
      <div data-testid="movie-card">
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 text-xl text-red-500"
        >
          <AiOutlineHeart className={`${isFavorite ? 'text-red-500' : 'text-gray-500'}`} />
        </button>
        <Link href={`/movies/${movie.id}`}>
          <div>
            <img
              src={IMAGE_BASE_URL + movie.poster_path}
              alt="movie-poster"
              data-testid="movie-poster"
              className="w-full"
            />
            <h5
              data-testid="movie-title"
              className="text-[#111827] text-lg font-bold my-3"
            >
              {movie.title}
            </h5>
            <p
              data-testid="movie-release-date"
              className="mt-3 text-[#9CA3AF] font-bold text-xs"
            >
              Release Date: {formatReleaseDate(movie.release_date)}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
