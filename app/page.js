import Header from "@/components/Header";
import { getTrendingMovies, getTopRatedMovies } from "@/utils/request";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
// import { ErrorBoundary, ErrorMessage } from './error';

export default async function Home() {
  // const movies = await getTrendingMovies();

  // imitate delay
  await new Promise(resolve => setTimeout(resolve, 3000))

  // Fetch top-rated movies
  const movies = await getTopRatedMovies();

  // Slice the movies array to only include the first 10 movies
  const slicedMovies = movies.slice(0, 10);

  return (
    <main className="relative">
      <Header movies={movies} />
      <h3 className="text-4xl font-bold mb-[44px] mt-20 container">
        Featured Movies
      </h3>
      <div className="grid md:grid-cols-4 gap-x-[80px] gap-y-[126px] mx-auto container">
        {slicedMovies.map(movie => {
          return <Card movie={movie} data-testid="movie-card" />;
        })}
      </div>
      <Footer />
    </main>
  );
}
