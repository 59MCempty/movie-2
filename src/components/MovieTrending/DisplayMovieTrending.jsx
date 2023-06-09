import React from 'react'
import {api_config} from "../../apis/api.configs.js";
import {NavLink} from "react-router-dom";
import {BsFillPlayCircleFill} from "react-icons/bs";

export const DisplayMovieTrending = ({trendingMovie}) => {

	return (
		<div className="grid__Card max-w-screen">
			{
				trendingMovie?.map((item, index) =>
					<div key={index} className="w-full">
						<div key={index} className="layout__Card">
							<div className="card__media">
								<img
									className="rounded-xl shadow-xl z-100 object-cover object-center h-full w-full border"
									src={api_config.w500Image(item?.poster_path)} alt={item?.name || item?.title} />
								<NavLink to={`/movie/${item?.id}`} className="style__btn">
									<BsFillPlayCircleFill size={32} className="text-red-500" />
								</NavLink>
							</div>

						</div>
						<div className="w-full h-3 flex items-center my-4 justify-center">
							<h1 className="name__card">{item.name || item.title}</h1>
						</div>
					</div>
				)
			}
		</div>
	)
}
