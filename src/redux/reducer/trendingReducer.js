import actionType from "../action/action.type.js";
const initState = {
	trendingData: [],
	loading: false,
}

// Create trending reducer;
const trendingReducer = (state=initState, action) => {
	switch (action.type) {
		case actionType.GET_TRENDING:
			return {
				...state,
				trendingData: action.trendingData,
			}
		default:
			return state
	}

}
export default trendingReducer;