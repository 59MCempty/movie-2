import actionType from "../action/action.type.js";

const initState = {
	value: ''
}
const searchReducer = (state=initState, action) => {
	switch (action.type) {
		case actionType.GET_SEARCH:
			console.log(action);
			return {
				...state,
				value: action.payload,
			}
		default:
			return state;
	}
}

export default searchReducer;