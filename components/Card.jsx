import Link from "next/link";
import React from "react";
import Image from "next/image";

const Card = ({ movie }) => {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  return (
    <div>
      <Link href={"/movies/" + movie.id}>
        <div>
          <img
            src={IMAGE_BASE_URL + movie.poster_path}
            alt="movie-path"
            data-testid="movie-poster_path"
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
            {movie.release_date}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
