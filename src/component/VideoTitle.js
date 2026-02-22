import VideoBackground from "./VideoBackground";

const VideoTitle = ({ title, overview, movieId }) => {
  return (
    <div className="relative w-full h-[65vh] md:h-[75vh] overflow-hidden bg-black text-white">
      <VideoBackground movieId={movieId} />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      <div className="absolute inset-0 z-10 flex items-center px-6 md:px-12">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow">
            {title}
          </h1>

          <p className="hidden md:block text-lg text-gray-200 mb-6 line-clamp-3">
            {overview}
          </p>

          <div className="flex items-center gap-3">
            <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
              ▶ Play
            </button>
            <button className="bg-gray-500/60 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-500/80 transition">
              ℹ More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
