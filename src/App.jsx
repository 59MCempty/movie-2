import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import MoviePage from "./Route/MoviePage/MoviePage.jsx";
import TVPage from "./Route/TV/TVPage.jsx";


const App = () => {
	return (
		<div className="">
			<Navbar/>
			<Routes>
				<Route path='/' element={<Homepage/>}/>
				<Route path='/movie' element={<MoviePage />}/>
				<Route path='/tv' element={<TVPage />}/>
			</Routes>
		</div>
	);
};

export default App;
