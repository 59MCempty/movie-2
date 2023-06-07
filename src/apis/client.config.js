import axios from "axios";
import {api_config} from "./api.configs.js";
import queryString from "query-string";


const Client = axios.create({
	baseURL: api_config.baseURL,
	headers: {
		'Authorization' : `Bearer ${api_config.TOKEN}`,
		'accept': 'application/json',
	},
	paramsSerializer: params => queryString.stringify(params)
})

Client.interceptors.request.use(async (config) => config)

Client.interceptors.response.use((response) => {
	if (response && response.data) {
		return response.data;
	}
	return response;
}, (err) => {
	console.log('error response >>>', err)
	throw err;
})

export default Client