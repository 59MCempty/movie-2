import React from 'react';
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai';
import Card from "../Card/Card.jsx";
import {Link} from "react-router-dom";
import {trending} from "../../apis/tmdb.api.js";

const Row = ({trendingList}) => {
	const category = Object.keys(trendingList)[0];
	const movieList = Object.values(trendingList)[0];
	console.log(trendingList)
	const moveLeft = () => {
		let move = document.getElementById("slide" + category)
		move.scrollLeft -= 1000
	}
	const moveRight = () => {
		let move = document.getElementById("slide" + category)
		move.scrollLeft += 1000
	}



	return (
		<div>
			<div className="flex flex-col gap-y-3">
				<div className="w-full h-full flex items-center justify-between text-white">
					<h1 className="title__trending">
						{category === 'all' ? 'now' : category} trending
					</h1>

					<Link to={`/${category}`} className={`transition ease-out duration-500 text-2xl capitalize rounded-lg mt-2 p-2 border-b-2 font-thin hover:bg-red-400/40 ${category === 'all' ? 'hidden' : 'block'}`}>
						view more
					</Link>
				</div>

				<div className="relative">
					<div
						onClick={moveLeft}
						className="icon__row left-0 z-[800]">
						<AiFillCaretLeft size={34}/>
					</div>
					<div id={`slide` + category} className="box__silde relative scrollbar-hide">
						{
							movieList?.map((item, index) =>
								<Card key={index} item={item} />
							)
						}
					</div>
					<div onClick={moveRight} className="icon__row right-0 pl-2 z-[800]">
						<AiFillCaretRight size={34}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Row;
