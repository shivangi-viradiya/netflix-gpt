import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { gptMovieNames, gptMovieResults } = useSelector((store) => store.gpt);

  if (!gptMovieNames?.length || !gptMovieResults?.length) return null;

  return (
    <div className="mt-6">
      {gptMovieNames.map((name, idx) => (
        <MovieList key={name} title={name} movies={gptMovieResults[idx]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;