import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovie} from "../../apis/module/movies.api.js";
const MoviePage = () => {
	const dispatch = useDispatch();
	const {popular} = useSelector(state => state.movie);

	useEffect(() => {
		dispatch(getMovie())
	},[])

	return (
		<div className="h-screen w-full">
			<div className="px-10 mt-24">
				<div className="w-fit h-fit">
					<h1 className="text-yellow-500 uppercase font-bold font-sans text-5xl">watch new <span className="text-red-600">movie</span></h1>
				</div>
			</div>
		</div>
	);
};

export default MoviePage;
