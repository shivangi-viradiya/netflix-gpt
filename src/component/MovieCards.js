import { IMG_CDN_URL } from "../utils/constant";

const MovieCards = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-48 pr-4">
      <img
        className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-200 cursor-pointer"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCards;
