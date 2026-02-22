import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { GPT_SEARCH_LOGO } from "../utils/constant";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen text-white bg-black overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        alt="GPT Search Background"
        src={GPT_SEARCH_LOGO}
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;