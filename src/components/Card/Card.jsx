import React from 'react';
import {api_config} from "../../apis/api.configs.js";
import {AiFillPlayCircle} from "react-icons/ai";
import {BsStarFill} from "react-icons/bs";
import {Link} from "react-router-dom";

const Card = ({item}) => {

	return (
		<div className="w-[400px] h-[250px] flex-shrink-0 relative ">
			<div>
				<img
					className="w-full h-full"
					src={api_config.w500Image(item?.backdrop_path || item?.poster_path)}
					alt={item?.title || item?.name}/>
			</div>
			<div className="playBtn__title absolute top-0">
				<Link to={`/${item?.media_type}/${item?.id}`}>
					<AiFillPlayCircle className="text-red-600" size={45}/>
				</Link>
				<h1 className="text-white text-xl">
					{item?.title || item?.name}
				</h1>
				<h1 className="text-white flex items-center gap-x-2">
					<BsStarFill
						className="text-orange-500"/> {(item?.vote_average * 5 / 10).toFixed(2)}
				</h1>
			</div>
		</div>
	);
};

export default Card;
