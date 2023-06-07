import React from 'react';
import {MdStar, MdStarHalf, MdStarOutline as EmptyStar} from "react-icons/md"

const RatedStar = ({rated}) => {
	rated = (rated * 5 / 10).toFixed(2);
	const starList = [];
	const starFillcount = Math.floor(rated);
	const hasHaflStar = rated - parseInt(rated) >= 0.5;
	const emptyStarCount = 5 - starFillcount - (hasHaflStar ? 1 : 0);

	for (let i = 0; i < starFillcount; i++) {
		starList.push(<MdStar/>);
	}
	if (hasHaflStar) {
		starList.push(<MdStarHalf/>);
	}
	for (let i = 0; i < emptyStarCount; i++) {
		starList.push(<EmptyStar/>);
	}

	return (
		<div className="flex text-xl gap-x-3">
			<div className="flex font-medium text-2xl text-yellow-600">
				{
					starList.map((star, index) =>
						<h4 key={index}>
							{star}
						</h4>
					)
				}
			</div>
			{/*<h4 className="flex text-yellow-600">{starList}</h4>*/}
			<h4 className="relative bottom-1 text-white font-bold">{rated} / 5</h4>
		</div>
	);
};

export default RatedStar;