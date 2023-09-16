import SideNav from "@/components/SideNav";
import { formatReleaseDate } from "@/utils/constant";
import { getMovieDetails, getSimilarMovies } from "@/utils/request";
import Image from "next/image";
import React from "react";



async function MovieDetailsPage({ params }) {
  // imitate delay
  await new Promise(resolve => setTimeout(resolve, 3000))

  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  const movieDetails = await getMovieDetails(params.id);
  const similarMovies = await getSimilarMovies(params.id);
  console.log(movieDetails);
  return (
    <div>
      <div class="flex">
        <SideNav />
        <div class="img w-[1198px] p-14">
          <img
            src={IMAGE_BASE_URL + movieDetails.poster_path}
            className="w-full h-[449px] rounded-[20px] mr-[37px]"
            data-testid="movie-poster_path"
          />
          <div className="flex text-[#404040] text-2xl font-medium mt-8">
            <h3 data-testid="movie-title" className="mr-2">
              {movieDetails.title} |
            </h3>
            <p data-testid="movie-release-date">{formatReleaseDate(movieDetails.release_date)}</p>
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
        <div className="grid grid-cols-4 gap-4 mt-10">
          {similarMovies.map(movie => {
            return (
              <div className="border">
                <img src={IMAGE_BASE_URL + movie.poster_path} className="w-full" />
                <h5 className="mt-4 text-[#333] font-bold text-lg">{movie.title}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
