import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {BsSearch} from "react-icons/bs";


const Navbar = () => {
	const category = [
		{
			display: 'Home',
			path: '/'
		},
		{
			display: 'Movies',
			path: '/movie'
		},
		{
			display: 'TV Series',
			path: '/tv'
		},
	]
	const [scroll, setScroll] = useState(false);
	window.addEventListener('scroll', () => {
		if (window.scrollY > 90) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	})

	return (
		<div className={`navbar md:max-w-screen ${scroll === true ? "bg-[#232323]" : "bg-gray-50/10"}`}>
			<div className="col-span-3 w-full flex items-center gap-7 px-7 h-full">
				<div className="logoNav flex items-center justify-center">
					<img
						sizes={40}
						className="h-full w-full"
						src='/src/assets/film-logo-png-transparent.png'
						alt="logo"/>
				</div>
				<h1 className="navText"><span className="text-5xl">w</span>elcome</h1>
			</div>

			<div className="col-span-5 navbarLink">
				{
					category.map((item, index) =>
						<div key={index} className="itemLink">
							<NavLink to={item.path}>
								{item.display}
							</NavLink>
						</div>
					)
				}
			</div>

			<div className="col-span-4 searchBox">
				<div className="h-10 relative">
					<BsSearch className="iconSearch" size={23}/>
					<input
						type="text"
						placeholder="Search here"
						className="searchField focus:border-red-900"/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
