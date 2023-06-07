import actionType from "../../redux/action/action.type.js";
import tmdbApi, {trending} from "../tmdb.api.js";
import axios from "axios";

export const getTrending = () => async (dispatch) => {
	// const trendingMediaType = Object.values(trending);
	// const request = trendingMediaType.map(async (item) => {
	// 	const res = await tmdbApi.getTrendingList(item);
	// 	const obj = {};
	// 	obj[item] = res.results;
	// 	return obj;
	// })
	// const response = await axios.all(request);
	// if (response) {
	// 	dispatch({
	// 		type: actionType.GET_TRENDING,
	// 		trendingData: response
	// 	})
	// } else {
	// 	dispatch({
	// 		type: actionType.GET_TRENDING,
	// 		trendingData: null,
	// 	})
	// }
	const request = trending.map(async item => {
		const res = await tmdbApi.getTrendingList(item.display);
		const obj = {};
		obj[item.display] = res.results;
		return obj;
	});

	const response = await axios.all(request);
	if (response) {
		dispatch({
			type: actionType.GET_TRENDING,
			trendingData: response
		})
	} else {
		dispatch({
			type: actionType.GET_TRENDING,
			trendingData: null,
		})
	}
}






