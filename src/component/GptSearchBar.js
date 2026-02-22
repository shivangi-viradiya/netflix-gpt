import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import lang from "../utils/languageConstant";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";
import { getMockMovieNames } from "../utils/gptMock";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movieName) => {
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      encodeURIComponent(movieName) +
      "&include_adult=false&language=en-US&page=1";

    const res = await fetch(url, API_OPTIONS);
    const json = await res.json();
    return json?.results || [];
  };

  const handleGptSearchClick = async () => {
    const query = searchText.current?.value?.trim();
    if (!query) return;

    // 1) Mock GPT gives 5 names
    const movieNames = getMockMovieNames(query);

    // 2) TMDB fetch results for each name
    const movieResults = await Promise.all(movieNames.map(searchMovieTMDB));

    // 3) Save to Redux
    dispatch(addGptMovieResult({ movieNames, movieResults }));
  };

  return (
    <div className="pt-28 md:pt-32 px-4 flex justify-center">
      <form className="flex justify-center" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          className="w-full md:w-[500px] bg-black text-white placeholder:text-white px-6 py-4 rounded-l-md border-2 border-red-600 outline-none"
          type="text"
          placeholder={lang?.[langKey]?.gptSearchPlaceholder || lang.en.gptSearchPlaceholder}
        />
        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-4 rounded-r-md transition duration-300 border-2 border-red-600 border-l-0"
          onClick={handleGptSearchClick}
        >
          {lang?.[langKey]?.search || lang.en.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;