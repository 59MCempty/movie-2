import React, {useState, useEffect} from 'react';
import tmdbApi from "../../apis/tmdb.api.js";

const Genre = ({mediaType, genre_ids}) => {
	const [genreData, setGenreData] = useState([]);
	const getGenre = async (mediaType) => {
		const response = await tmdbApi.getGenre(mediaType);
		setGenreData(response.genres ? response.genres : null);
	};
	useEffect(() => {
		getGenre(mediaType);
	}, [genre_ids])

	const genreDisplay = [];

	if (genre_ids && genreData) {
		genre_ids.forEach((id) => {
			genreData.filter((item) => {
				if (id === item.id) {
					genreDisplay.push(item.name);
				}
			})
		})
	}

	return (
		<div className="flex gap-4 mt-4">
			{
				genreDisplay.map((genre, index) =>
					<div key={index} className="genreStyle">
						<h1>
							{genre}
						</h1>
					</div>
				)
			}
		</div>
	);
};

export default Genre;
