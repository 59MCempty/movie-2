import React, {useEffect} from "react";
import MainPage from "../../components/Mainpage/MainPage.jsx";
import Row from "../../components/Row/Row.jsx";
import {useSelector, useDispatch} from "react-redux";
import {getTrending} from "../../apis/module/api.trending.js";


const Homepage = () => {
	const dispatch = useDispatch();

	const {trendingData} = useSelector(state => state.trending);

	useEffect(() => {
		dispatch(getTrending());
	}, []);
	return (
		<div className="">
			<MainPage/>
			<section className="relative bottom-20 w-full h-full lg:max-w-screen px-14">
				{
					trendingData?.map((item, index) =>
						<Row key={index} trendingList={item}/>
					)
				}
			</section>
		</div>
	);
};

export default Homepage;
