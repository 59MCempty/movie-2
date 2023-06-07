import trendingReducer from "./trendingReducer.js";
import {combineReducers} from "redux";
import movieReducer from "./movieReducer.js";


const rootReducer = combineReducers({
	trending: trendingReducer,
	movie: movieReducer,
})

export default rootReducer
