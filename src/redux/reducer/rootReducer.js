import trendingReducer from "./trendingReducer.js";
import {combineReducers} from "redux";
import tvReducer from "./tvReducer.js";
import movieReducer from "./movieReducer.js";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import searchReducer from "./searchReducer.js";

const commonConfig = {
	storage: storage,
	stateReconciler: autoMergeLevel2,
}

const trendingConfig = {
	...commonConfig,
	// key: name store in local
	key: 'trending',
	whitelist: ['trendingData']
}

const searchConfig = {
	...commonConfig,
	key: 'search',
	whitelist: ['value']
}

const rootReducer = combineReducers({
	trending: persistReducer(trendingConfig, trendingReducer),
	movie: movieReducer,
	tv: tvReducer,
	search: (searchConfig, searchReducer),
})

export default rootReducer
