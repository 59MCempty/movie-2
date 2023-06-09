import actionType from "./action.type.js";

export const getDataSearch = (keyword) => {
	return {
		type: actionType.GET_SEARCH,
		payload: keyword,
	}
}