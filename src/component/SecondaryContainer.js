import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);
  // console.log(movies);

  return (
    <div className="relative z-30 -mt-20 md:-mt-10 px-4 md:px-12 pb-10 bg-gradient-to-t from-black via-black/95 to-transparent">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Popular"} movies={movies.nowPopulerMovies} />
      <MovieList title={"Upcoming"} movies={movies.upComingMovies} />

    </div>
  )
}

export default SecondaryContainer