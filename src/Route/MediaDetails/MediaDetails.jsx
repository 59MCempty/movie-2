import React, {useEffect, useRef, useState} from 'react'
import {Link, NavLink, useLocation} from "react-router-dom";
import tmdbApi from "../../apis/tmdb.api.js";
import {api_config} from "../../apis/api.configs.js";
import {BsStarFill} from "react-icons/bs";
import dayjs from "dayjs";
import {Overview} from "../../components/Overview/Overview.jsx";
import {Video} from "../../components/Trailers/Video.jsx";
import {Similar} from "../../components/SimilarVideo/Similar.jsx";

export const MediaDetails = () => {

	const buttonRef = useRef(null);
	const [temp, setTemp] = useState({
		condition: false,
		name: null,
	});
	const [mediaDetails, setMediaDetails] = useState([]);
	const [credits, setCredits] = useState([]);
	const [images, setImages] = useState([]);
	const [similarVid, setSimilarVid] = useState([]);
	const [videoId, setVideoId] = useState();
	const location = useLocation();
	const pathname = location.pathname.split('/');
	const media_type = pathname[1];
	const media_id = pathname[2];
	console.log(mediaDetails)

	const episodes = mediaDetails?.number_of_episodes >= 2 ? mediaDetails?.number_of_episodes + " SEASONS" : mediaDetails?.number_of_episodes + " SEASON";
	console.log(episodes)
	const getDetailsData = async (media_type, media_id) => {
		const response1 = await tmdbApi.getMediaDetail(media_type, media_id);
		if (response1) {
			setMediaDetails(response1);
		}
		const response2 = await tmdbApi.getCredit(media_type, media_id);
		if (response2) {
			setCredits(response2.cast.slice(0, 3));
		}

		const response3 = await tmdbApi.getImages(media_type, media_id);
		if (response3) {
			setImages(response3?.posters.slice(1, 6));
		}
		const response4 = await tmdbApi.getVideos(media_type, media_id);
		if (response4) {
			setVideoId(api_config.youtubePath(response4.results[0].key));
		}
		const response5 = await tmdbApi.getSimilar(media_type, media_id);
		if (response5) {
			setSimilarVid(response5.results.slice(0, 8))
		}
	}

	useEffect(() => {
		getDetailsData(media_type, media_id)
		if (buttonRef.current) {
			buttonRef.current.click();
		}
	}, [media_id])

	const release_date = dayjs(mediaDetails?.release_date || mediaDetails?.first_air_date).format('YYYY');
	const hour = Math.floor(mediaDetails?.runtime / 60); // Lấy phần nguyên khi chia cho 60
	const minutes = mediaDetails?.runtime % 60; // Lấy phần dư khi chia cho 60
	const runtimeHour = hour + "h " + minutes + 'm';

	const getGenre = mediaDetails?.genres?.map((item, index) => {
		return item.name;
	})
	const displayDetails = () => {
		if (temp.condition === true && temp.name === "overview") {
			return (
				<Overview mediaDetails={mediaDetails} images={images} credits={credits} getGenre={getGenre}/>
			)
		}

		if (temp.condition === true && temp.name === "trailer") {
			return (
				<Video videoId={videoId} />
			)
		}

		if (temp.condition === true && temp.name === "similar") {
			return (
				<Similar media_type={media_type} similarVid={similarVid} />
			)
		}
	}
	const clickBtn = (e) => {
		if (e.target.name === "overview" || e.target.name === "trailer" || e.target.name === "similar") {
			setTemp(prevState => ({
				...prevState, name: e.target.name, condition: true,
			}))
		}
	}


	return (
		mediaDetails &&
		<section className="mt-40 md:mt-32 w-full h-[650px] grid grid-cols-12 text-white -z-20">
			<div className="col-span-5">
				<div className="h-full w-full flex justify-end">
					<img
						className="h-full xl:w-[550px] object-center object-cover block shadow-lg shadow-gray-950/70"
						src={api_config.w500Image(mediaDetails?.poster_path)} alt={mediaDetails?.name}/>
				</div>
			</div>

			<div className="px-8 col-span-7 max-w-screen-lg">
				<div className="flex justify-between items-center w-full mt-3 font-medium">
					<h1 className="lg:text-5xl text-3xl uppercase w-[90%]">{mediaDetails?.name || mediaDetails?.title}</h1>

					<h1 className="flex items-center justify-content w-52 gap-x-2 text-2xl ">{(mediaDetails?.vote_average * 5 / 10).toFixed(2)} /
						5 <BsStarFill size={50} className="text-yellow-600"/></h1>
				</div>

				<div className="flex gap-x-4 items-center mt-4 text-xl text-gray-600 w-fit px-3">
					<h1 className="border-r border-gray-600 pr-3 uppercase">{release_date}</h1>
					<h1 className="border-r border-gray-600 pr-3">{mediaDetails?.number_of_episodes ? episodes : runtimeHour}</h1>
					<h1 className="border-r border-gray-600 pr-3 uppercase">{mediaDetails?.original_language}</h1>
				</div>

				<div className="w-fit flex text-3xl mt-4">
					<button
						ref={buttonRef}
						onClick={(e) => clickBtn(e)}
						name="overview"
						type="button"
						className={`btn__details ${temp.condition === true && temp.name === 'overview' ? 'bg-gray-800' : ""}`}>overview
					</button>
					<button
						onClick={(e) => clickBtn(e)}
						name="trailer"
						type="button"
						className={`btn__details ${temp.condition === true && temp.name === 'trailer' ? 'bg-gray-800' : ""}`}>trailer
					</button>
					<button
						onClick={(e) => clickBtn(e)}
						name="similar"
						type="button"
						className={`btn__details ${temp.condition === true && temp.name === 'similar' ? 'bg-gray-800' : ""}`}>similar
					</button>
				</div>

				{displayDetails()}
			</div>

		</section>
	)
}
