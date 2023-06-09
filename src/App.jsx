import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Homepage from "./Route/Homepage/Homepage.jsx";
import MoviePage from "./Route/MoviePage/MoviePage.jsx";
import TVPage from "./Route/TV/TVPage.jsx";
import {MediaDetails} from "./Route/MediaDetails/MediaDetails.jsx";
import {SearchPage} from "./Route/SearchPage/SearchPage.jsx";


const App = () => {
	return (
		<div>
			<Navbar/>
			<Routes>
				<Route path='/' element={<Homepage/>}/>
				<Route path='/movie' element={<MoviePage />}/>
				<Route path='/tv' element={<TVPage />}/>
				<Route path='/movie/:id' element={<MediaDetails />} />
				<Route path='/tv/:id' element={<MediaDetails />} />
				<Route path='/search' element={<SearchPage />} />
			</Routes>
		</div>
	);
};

export default App;
