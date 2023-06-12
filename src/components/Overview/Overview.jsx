import React from 'react'
import {api_config} from "../../apis/api.configs.js";

export const Overview = ({mediaDetails, credits, images, getGenre}) => {
	return (
		<div className="w-full mt-4 flex flex-col gap-y-4">
			<h1 className="text-xl font-normal">{mediaDetails?.overview}</h1>
			<div className="flex gap-x-4 text-lg">
				<h1 className="text-gray-500">Status: </h1>
				<div className="">
					{mediaDetails?.status}
				</div>
			</div>
			<div className="flex text-lg gap-x-5">
				<h1 className="text-gray-500">Starring: </h1>
				<div className="flex w-full max-w-full">
					{
						credits?.map((item, index) =>
							<span className="" key={index}>
									{`${item?.name || item?.original_name},`} &nbsp;
								</span>
						)
					}
				</div>
			</div>


			<div className="flex gap-x-4 text-lg ">
				<h1 className="text-gray-500">Genre: </h1>
				<div className="">
					{
						getGenre?.map((item, index) =>
							<span key={index} className="">
									{`${item},`} &nbsp;
								</span>)
					}
				</div>
			</div>

			<div className="grid grid-cols-5 gap-x-2 mt-8">
				{
					images.map((item, index) =>
						<div className="w-full lg:w-full h-[240px] lg:h-[25	0px] object-center object-cover col-span-1" key={index}>
							<img className="h-full w-full" src={api_config.w500Image(item?.file_path)} alt="poster"/>
						</div>
					)
				}
			</div>

		</div>
	)
}
