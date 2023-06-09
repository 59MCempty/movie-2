import React, {useEffect, useState} from 'react'
import {NavLink, useLocation} from "react-router-dom";
import tmdbApi from "../../apis/tmdb.api.js";
import {api_config} from "../../apis/api.configs.js";
import {BsFillPlayCircleFill} from "react-icons/bs";

export const SearchPage = () => {
	const [dataAfterSearch, setDataAfterSearch] = useState([]);
	const location = useLocation();
	let page = 1;
	const getDataSearch = async (keyword, page) => {
		const response = await tmdbApi.getSearchMulti(keyword, page)
		setDataAfterSearch(response.results);
	}

	useEffect(() => {
		getDataSearch(location.state.keyword, page);
	}, [location.state.keyword, page])

	return (
		<div className="mt-24 px-20 py-10 text-whitle">
			<h1 className="mb-5 text-4xl text-gray-600 font-medium uppercase">Search For: <span
				className="lowercase text-white">{location.state.keyword}</span></h1>
			<div className="grid grid-cols-3 md:grid-cols-5 gap-x-5 gap-y-10 mt-7 max-w-screen place-items-center">
				{
					dataAfterSearch?.map((item, index) =>
						<div key={index} className="w-full">
							<div key={index} className="flex flex-col items-center justify-center cursor-pointer mb-3">
								<div className="relative transition duration-150 delay-300 ease-out hover:scale-125 h-[90%] w-full hover:z-50">
									<img
										className="rounded-xl shadow-xl z-100 object-cover object-center h-full w-full border"
										src={api_config.w500Image(item?.poster_path)} alt={item?.name || item?.title} />
									<NavLink to={`/${item?.media_type}/${item?.id}`} className="absolute transition duration-150 delay-300 ease-out w-full h-full opacity-0 hover:opacity-100 hover:bg-gradient-to-b from-black top-0 flex items-center justify-center">
										<BsFillPlayCircleFill size={32} className="text-red-500" />
									</NavLink>
								</div>

							</div>
							<div className="w-full h-3 flex items-center py-5 justify-center text-white">
								<h1 className="text-center inline-block align-middle text-lg md:text-2xl">{item.name || item.title}</h1>
							</div>
						</div>
					)
				}
			</div>
		</div>
	)
}
