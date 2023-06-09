import actionType from "../action/action.type.js";

const initialState = {
	on_the_air: 'on_the_air',
	popular: 'popular',
	top_rated: 'top_rated',
}

const tvReducer = (state=initialState, action) => {
	switch (action.type) {
		case actionType.GET_TV:
			return {
				...state,
				on_the_air: action.on_the_air,
				popular: action.popular,
				top_rated: action.top_rated,
			}
		default:
			return state
	}
}

export default tvReducer;