import React from 'react'
import {api_config} from "../../apis/api.configs.js";
import {NavLink} from "react-router-dom";
import {BsFillPlayCircleFill} from "react-icons/bs";

export const DisplayTVList = ({list}) => {

	return (
		<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-7 gap-x-2 max-w-screen place-items-center">
			{
				list?.map((item, index) =>
					<div key={index} className="w-full">
						<div className="h-[450px] w-full flex flex-col items-center justify-center cursor-pointer mb-3">
							<div className="relative transition duration-150 delay-300 ease-out hover:scale-125 h-[90%] w-full hover:z-50">
								<img
									className="rounded-xl shadow-xl z-100 object-cover object-center h-full w-full border"
									src={api_config.w500Image(item?.poster_path)} alt={item?.name || item?.title} />
								<NavLink to={`/tv/${item?.id}`} className="absolute transition duration-150 delay-300 ease-out w-full h-full opacity-0 hover:opacity-100 hover:bg-gradient-to-b from-black top-0 flex items-center justify-center">
									<BsFillPlayCircleFill size={32} className="text-red-500" />
								</NavLink>
							</div>

						</div>
						<div className="w-full h-3 flex items-center my-4 justify-center">
							<h1 className="text-center inline-block align-middle text-lg md:text-xl">{item.name || item.title}</h1>
						</div>
					</div>
				)
			}
		</div>
	)
}
