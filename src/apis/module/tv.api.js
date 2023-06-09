import tmdbApi, {tvType} from "../tmdb.api.js";
import axios from "axios";
import actionType from "../../redux/action/action.type.js";

const tvMediaType = Object.values(tvType);
const getTv = () => async (dispatch) => {
	const request = tvMediaType?.map(async (tvType) => {
		const res = await tmdbApi.getTV(tvType);
		const obj = {};
		obj[tvType] = res.results;
		return obj
	})

	const response = await axios.all(request);
	if (response) {
		dispatch({
			type: actionType.GET_TV,
			popular: response[0].popular,
			top_rated: response[1].top_rated,
			on_the_air: response[2].on_the_air,
		})
	} else {
		dispatch({
			type: actionType.GET_MOVIE,
			movieData: null
		})
	}
}

export default getTv;
