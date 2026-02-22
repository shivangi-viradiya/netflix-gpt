import { API_OPTIONS } from "../utils/constant";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies } from "../utils/moviesSlice";


const useTopRatedmovies = () => {

    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

    const getTopRatedMoviesDetail = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();

        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {
        if (topRatedMovies?.length) return;
        getTopRatedMoviesDetail();
    }, [dispatch, topRatedMovies]);

};

export default useTopRatedmovies;