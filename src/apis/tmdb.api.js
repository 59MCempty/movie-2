import clientConfig from "./client.config.js";

export const mediaType = {
	movie: 'movie',
	tv: 'tv'
};

export const movieType = {
	popular: 'popular',
	top_rated: 'top_rated',
	upcoming: 'upcoming'
}

export const tvType = {
	popular: 'popular',
	top_rated: 'top_rated',
	on_the_air: 'on_the_air'
}

export const trending = [
	{
		display: 'all',
		path: '/',
	},
	{
		display: 'movie',
		path: '/movie',
	},
	{
		display: 'tv',
		path: '/',
	}
]

const tmdbApi = {
	getTrendingList: (trendingType) => {
		try {
			const url = "trending/" + trendingType + "/day";
			return clientConfig.get(url)
		} catch ({err}) {
			console.log(err)
		}
	},
	getGenre: (mediaType) => {
		try {
			const url = 'genre/' + mediaType + '/list';
			return clientConfig.get(url)
		} catch ({err}) {
			console.log(err)
		}
	},
	getMovie: async (mediaType) => {
		try {
			const url = 'movie/' + mediaType;
			return clientConfig.get(url)
		} catch ({err}) {
			console.log(err);
		}
	}
}

export default tmdbApi