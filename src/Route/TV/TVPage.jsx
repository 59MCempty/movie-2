import React, {useEffect, useState} from 'react';
import getTv from "../../apis/module/tv.api.js";
import {useDispatch, useSelector} from "react-redux";
import {DisplayTVList} from "../../components/TVList/DisplayTVList.jsx";
import {DIsplayTvTrending} from "../../components/TVTrending/DIsplayTVTrending.jsx";

const TVPage = () => {
	const dispatch = useDispatch();
	const {trendingData} = useSelector(state => state.trending);
	const trendingTV = trendingData[2].tv;
	const {popular, on_the_air, top_rated} = useSelector(state => state.tv);
	const [show, setShow] = useState({
		loading: false,
		displayTVType: null
	});

	const clickBtn = (e) => {
		if (e.target.name === 'popular' || e.target.name === 'top_rated' || e.target.name === 'on_the_air') {
			if (e.target.name === 'popular') {
				setShow(prevState => ({
					...prevState, loading: true, displayTVType: popular
				}));
			}
			if (e.target.name === 'top_rated') {
				setShow(prevState => ({
					...prevState, loading: true, displayTVType: top_rated
				}));
			}
			if (e.target.name === 'on_the_air') {
				console.log(e.target.name);
				setShow(prevState => ({
					...prevState, loading: true, displayTVType: on_the_air
				}));
			}
		} else {
			setShow(prevState => ({
				...prevState, loading: false, displayTVType: null
			}))
		}
	}

	useEffect(() => {
		dispatch(getTv());
	}, []);

	const displayTV = () => {
		if (show.loading === true && show.displayTVType) {
			return (
				<DisplayTVList list={show.displayTVType}/>
			)
		}
	}
	return (
		<div className="w-full text-white h-full py-7">
			<div className="px-16 mt-24">
				<div className="w-fit h-fit">
					<h1 className="content__tv">
						all <span
						style={{textShadow: '3px 3px #24a0ed'}}
						className="text-5xl text-[#002966]">tv series</span>
						<br/> you need
					</h1>
				</div>

				<div className="flex item-center gap-x-2 h-12 w-full mt-4">
					<div
						className={`style__btn__tv ${show.loading === true && show.displayTVType === popular ? 'bg-[#363636] border-blue-500' : 'bg-[#232323]'}`}>
						<button
							onClick={(e) => clickBtn(e)}
							type="button"
							name="popular"
							className="nameType__btn__movie">
							popular
						</button>
					</div>
					<div
						className={`style__btn__tv ${show.loading === true && show.displayTVType === top_rated ? 'bg-[#363636] border-blue-500' : 'bg-[#232323]'}`}>
						<button
							onClick={(e) => clickBtn(e)}
							type="button"
							name="top_rated"
							className="nameType__btn__movie">
							top rated
						</button>
					</div>

					<div
						className={`style__btn__tv ${show.loading === true && show.displayTVType === on_the_air ? 'bg-[#363636] border-blue-500' : 'bg-[#232323]'}`}>
						<button
							onClick={(e) => clickBtn(e)}
							type="button"
							name="on_the_air"
							className="nameType__btn__movie">
							on the air
						</button>
					</div>


				</div>
				{displayTV()}
				{show.loading === false &&
					<DIsplayTvTrending trendingTV={trendingTV}/>
				}
			</div>
		</div>
	);
};

export default TVPage;
