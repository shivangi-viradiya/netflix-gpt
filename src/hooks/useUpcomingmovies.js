import { API_OPTIONS } from "../utils/constant";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from "../utils/moviesSlice";


const useUpcomingmovies = () => {

    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store) => store.movies.upComingMovies);

    const getUpComingMoviesDetail = async () => {
        if (upcomingMovies?.length) return;
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();

        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        getUpComingMoviesDetail();
    }, [dispatch, upcomingMovies]);

};

export default useUpcomingmovies;