import { API_OPTIONS } from "../utils/constant";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPopulerMovies } from "../utils/moviesSlice";


const useNowPopulermovies = () => {

    const dispatch = useDispatch();
    const nowPopulerMoviesDetail = useSelector((store) => store.movies.nowPopulerMovies)

    const getNowPopulerMoviesDetail = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();

        dispatch(addNowPopulerMovies(json.results));
    }

    useEffect(() => {
         if (nowPopulerMoviesDetail?.length) return;
        getNowPopulerMoviesDetail();
    }, [dispatch, nowPopulerMoviesDetail]);

};

export default useNowPopulermovies;