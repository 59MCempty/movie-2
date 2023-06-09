import actionType from "../action/action.type.js";

const initState = {
	total_list: [],
	popular: [],
	top_rated: [],
	upcoming: [],
	loading: true,
}

const movieReducer = (state=initState, action) => {
	switch (action.type) {
		case actionType.GET_MOVIE:
			console.log(action)
			return {
				...state,
				popular: action.popular,
				top_rated: action.top_rated,
				upcoming: action.upcoming,
			}
		default:
			return state
	}

}
export default movieReducer;
