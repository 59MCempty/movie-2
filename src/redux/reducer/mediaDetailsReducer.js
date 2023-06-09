import actionType from "../action/action.type.js";

const initialState = {
	details: [],
}

const mediaDetailsReducer = (state=initialState, action) => {
	switch (action.type) {
		case actionType.GET_DETAILS:
			return {
				...state,
				details: action.details,
			}
		default:
			return state;
	}
}

export default mediaDetailsReducer;