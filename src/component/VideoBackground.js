import { useSelector } from "react-redux";
import useMovieTrailers from "../hooks/useMovieTrailers";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailers(movieId);

  if (!trailerVideo?.key) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      <iframe
        className="absolute inset-0 w-full h-full scale-125 pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=${trailerVideo.key}`}
        title="Trailer"
        allow="autoplay; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      {/* Netflix bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
  );
};

export default VideoBackground;
