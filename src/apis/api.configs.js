export const api_config = {
	baseURL: "https://api.themoviedb.org/3/",
	KEY: "73981fdb74b547d23604e21fef98d7f6",
	TOKEN: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mzk4MWZkYjc0YjU0N2QyMzYwNGUyMWZlZjk4ZDdmNiIsInN1YiI6IjY0NTBjYWU3ZTE2ZTVhMDE1ZGI0NDZiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HRdcKP4D7AJ58j_E7LeXK9iE1MRcOOPVXbFj0DxqFBQ",
	originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
	w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
	youtubePath: (videoKey) => `https://www.youtube.com/embed/${videoKey}?rels=0`
}