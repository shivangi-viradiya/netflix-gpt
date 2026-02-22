import Header from './Header';
import useNowPlayingmovies from '../hooks/useNowPlayingmovies';
import MainContainer from "./MainContainer";
import SecondaryContainer from './SecondaryContainer';
import useNowPopulermovies from '../hooks/useNowPopulermovies';
import useUpcomingmovies from '../hooks/useUpcomingmovies';
import useTopRatedmovies from '../hooks/useTopRatedmovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {

  const showSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingmovies();
  useNowPopulermovies();
  useTopRatedmovies();
  useUpcomingmovies();

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      {showSearch ? (<GptSearch />) :
       ( <>
          <MainContainer />
          <SecondaryContainer />
        </>)
      }

    </div>

  )
}

export default Browse