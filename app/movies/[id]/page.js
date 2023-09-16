import SideNav from "@/components/SideNav";
import { getMovieDetails, getSimilarMovies } from "@/utils/request";
import Image from "next/image";
import React from "react";

async function MovieDetailsPage({ params }) {
  // imitate delay
  await new Promise(resolve => setTimeout(resolve, 3000));

  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  const movieDetails = await getMovieDetails(params.id);
  const similarMovies = await getSimilarMovies(params.id);
  console.log(movieDetails);

  const formatDateToUTC = dateString => {
    const date = new Date(dateString);
    return date.toISOString().slice(0, 19).replace("T", " ");
  };

  return (
    <div>
      <div className="flex">
        <SideNav />
        <div className="img w-full md:w-[1198px] p-5 md:p-14">
          <img
            src={IMAGE_BASE_URL + movieDetails.backdrop_path}
            className="w-full h-[449px] rounded-[20px] mr-[37px]"
            data-testid="movie-poster"
          />
          <div className="flex text-[#404040] text-2xl font-medium mt-8">
            <h3 data-testid="movie-title" className="mr-2">
              {movieDetails.title} |
            </h3>
            <p data-testid="movie-release-date">{new Date(movieDetails.release_date).toUTCString()}</p>
          </div>

          <p
            data-testid="movie-overview"
            className="text-[#333] text-[20px] mt-[25px]"
          >
            {movieDetails.overview}
          </p>
          <div>
            <p className="flex gap-4 mt-9">
              {movieDetails.genres.map(genre => {
                return (
                  <span
                    key={genre.id}
                    className="bg-white border-[#B91C1C] border-2 text-[#B91C1C] py-1 px-5 rounded-2xl"
                  >
                    {genre.name}
                  </span>
                );
              })}
            </p>
          </div>
          <p
            data-testid="movie-runtime"
            className="text-[#333] text-[20px] mt-[25px]"
          >
            {movieDetails.runtime} minutes
          </p>
        </div>
      </div>

      {/* Similar Movies */}
      <div className="container mt-5">
        <h2 className="text-4xl text-center">Similar Movies</h2>
        <div className="grid md:grid-cols-4 gap-4 mt-10">
          {similarMovies.map(movie => {
            return (
              <div className="border" key={movie.id}>
                <img
                  src={IMAGE_BASE_URL + movie.poster_path}
                  className="w-full"
                  alt={movie.poster_path}
                  data-testid="movie-poster"
                />
                <h5
                  data-testid="movie-title"
                  className="mt-4 text-[#333] font-bold text-lg"
                >
                  {movie.title}
                </h5>
                <p data-testid="movie-release-date">{movie.release_date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
