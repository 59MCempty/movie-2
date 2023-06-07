import React, {useEffect} from 'react';
import {api_config} from "../../apis/api.configs.js";
import dayjs from "dayjs";
import Genre from "../../components/Genre/GenreList.jsx";
import RatedStar from "../../components/Starrated/RatedStar.jsx";
import {AiFillRightCircle} from 'react-icons/ai';
import {useSelector} from "react-redux";

const MainPage = () => {
	const {trendingData} = useSelector(state => state.trending);

	const RandomNumberMoive = Math.floor(Math.random() * trendingData[0]?.all.length);

	const movie = RandomNumberMoive > 0 ? trendingData[0]?.all[RandomNumberMoive] : 0;

	const release_date = dayjs(movie?.release_date).format('YYYY');

	return (movie && <div className="h-[1024px] max-w-2xl md:max-w-full w-full">
			<div className="shadowBanner"></div>
			<img
				className="banner brightness-50 contrast-100"
				src={api_config.originalImage(movie.backdrop_path || movie.poster_path)}
				alt={movie.title || movie.name}/>
			<div className="titleBanner">
				<div>
					<h1 className="text-white w-[80%] text-6xl font-medium">
						{movie.title || movie.name}
					</h1>
				</div>
				<div className="flex gap-5 mt-2 items-center">
					<RatedStar rated={movie.vote_average}/>
				</div>
				<div>
					<h1 className="text-xl text-white">Release: {release_date}</h1>
					<Genre mediaType={movie.media_type} genre_ids={movie.genre_ids}/>
				</div>
				<div className="overview max-w-6xl md:max-h-lg">
					{movie.overview}
				</div>
				<div className="w-44 h-20 mt-5 border-none outline-none">
					<button
						name="details"
						type="button"
						className="buttonHomepage bg-gray-800/40">
						<AiFillRightCircle size={35}/> Details
					</button>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
