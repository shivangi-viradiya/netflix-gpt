import { API_OPTIONS } from "../utils/constant";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from "../utils/moviesSlice";


const useNowPlayingmovies = () => {

    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

    const getNowPlayingMoviesDetail = async () => {

        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?&page=1", API_OPTIONS);
        const json = await data.json();

        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {

        if (nowPlayingMovies?.length) return;

        getNowPlayingMoviesDetail();

    }, [dispatch, nowPlayingMovies]);

};

export default useNowPlayingmovies;