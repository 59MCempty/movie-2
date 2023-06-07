import tmdbApi, { movieType } from '../tmdb.api.js';
import axios from 'axios';
import actionType from '../../redux/action/action.type.js';


const movieMediaType = Object.values(movieType);
export const getMovie = () => async (dispatch) => {
    const request = movieMediaType.map(async (media_type) => {
        const res = await tmdbApi.getMovie(media_type);
        const obj = {};
        obj[media_type] = res.results;
        return obj
    })

    const response = await axios.all(request);
    if (response) {
        dispatch({
            type: actionType.GET_MOVIE,
            popular: response[0].popular,
            top_rated: response[1].top_rated,
            upcoming: response[2].upcoming
        })
    } else {
        dispatch({
            type: actionType.GET_MOVIE,
            movieData: null
        })
    }
}



