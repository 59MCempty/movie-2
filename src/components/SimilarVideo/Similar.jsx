import React from 'react'
import {NavLink} from "react-router-dom";
import {api_config} from "../../apis/api.configs.js";

export const Similar = ({similarVid, media_type}) => {
	return (
		<div className="w-full grid grid-cols-4 gap-y-5 gap-x-3 mt-8 ">
			{
				similarVid.map((item, index) =>
					<NavLink
						key={index}
						className="h-[280px] w-[240px] relative" to={`/${media_type}/${item?.id}`}>
						<img
							className="w-full h-full object-cover object-center"
							src={api_config.w500Image(item.poster_path || item.backdrop_path)} alt={item.name || item.title}/>
						<div className="absolute bottom-0 w-full bg-black/30">
							<h1>{(item.name || item.title).slice(0, 10)}</h1>
						</div>
					</NavLink>
				)
			}
		</div>
	)
}
