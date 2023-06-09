import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getMovie} from '../../apis/module/movies.api.js'
import DisplayMovieList from '../../components/MovieList/DisplayMovieList.jsx'
import {DisplayMovieTrending} from "../../components/MovieTrending/DisplayMovieTrending.jsx";

const MoviePage = () => {

	const dispatch = useDispatch();
	const {popular, top_rated, upcoming} = useSelector(state => state.movie);
	const [show, setShow] = useState({
		loading: false,
		displayMovieType: null
	});

	const {trendingData} = useSelector(state => state.trending);
	const trendingMovie = trendingData[1].movie;

	// click btn and get data movie list
	const clickBtn = (e) => {
		if (e.target.name === 'popular' || e.target.name === 'top_rated' || e.target.name === 'upcoming') {
			if (e.target.name === 'popular') {
				setShow(prevState => ({
					...prevState, loading: true, displayMovieType: popular
				}))
			}
			if (e.target.name === 'top_rated') {
				setShow(prevState => ({
					...prevState, loading: true, displayMovieType: top_rated
				}))
			}
			if (e.target.name === 'upcoming') {
				setShow(prevState => ({
					...prevState, loading: true, displayMovieType: upcoming
				}))
			}
		} else {
			setShow(prevState => ({
				...prevState, loading: false, displayMovieType: null
			}))
		}
	}
	useEffect(() => {
		dispatch(getMovie())

	}, [])

	// display list movie
	const displayMovie = () => {
		if (show.loading === true && show.displayMovieType) {
			return (
				<DisplayMovieList list={show.displayMovieType}/>
			)
		}
	}

	return (
		<div className="w-full text-white h-full py-7">
			<div className="px-16 mt-24">
				<div className="w-fit h-fit">
					<h1 className="content__movie">
						watch all new <span
						style={{textShadow: '3px 3px #FF0000'}}
						className="text-5xl text-orange-500">movies</span>
					</h1>
				</div>

				<div className="flex item-center gap-x-1 h-12 w-full mt-4">
					<div
						className={`style__button__movie ${show.loading === true && show.displayMovieType === popular ? 'bg-[#363636] border-orange-500' : 'bg-[#232323]'}`}>
						<button
							onClick={(e) => clickBtn(e)}
							type="button"
							name="popular"
							className="nameType__btn__movie">
							popular
						</button>
					</div>
					<div
						className={`style__button__movie ${show.loading === true && show.displayMovieType === top_rated ? 'bg-[#363636] border-orange-500' : 'bg-[#232323]'}`}>
						<button
							onClick={(e) => clickBtn(e)}
							type="button"
							name="top_rated"
							className="nameType__btn__movie">
							{`top_rated`.replace('_', ' ')}
						</button>
					</div>

					<div
						className={`style__button__movie ${show.loading === true && show.displayMovieType === upcoming ? 'bg-[#363636] border-orange-500' : 'bg-[#232323]'}`}>
						<button
							onClick={(e) => clickBtn(e)}
							type="button"
							name="upcoming"
							className="nameType__btn__movie">
							upcoming
						</button>
					</div>
				</div>
				{displayMovie()}
				{show.loading === false &&
					<DisplayMovieTrending trendingMovie={trendingMovie} />
				}
			</div>
		</div>
	)
}

export default MoviePage
