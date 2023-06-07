import React from 'react'
import { api_config } from '../../apis/api.configs.js'
import { Link, NavLink } from 'react-router-dom'
import {BsFillPlayCircleFill} from "react-icons/bs";


const DisplayMovieList = ({ list }) => {
    return (
        <div className="grid grid-cols-5 mt-7">
            {
                list?.map((item, index) =>
                    <div key={index} className="h-[550px] w-[240px] my-7 flex flex-col items-center justify-center cursor-pointer">
                        <div className="relative transition duration-150 delay-300 ease-out hover:scale-125 h-[90%] w-full hover:z-50">
                            <img
                                className="rounded-xl shadow-xl z-100 object-cover object-center h-full w-full border"
                                src={api_config.w500Image(item?.poster_path)} alt={item?.name || item?.title} />
                            <NavLink to="/" className="absolute transition duration-150 delay-300 ease-out w-full h-full opacity-0 hover:opacity-100 hover:bg-gradient-to-b from-black top-0 flex items-center justify-center">
                                <BsFillPlayCircleFill size={32} className="text-red-500" />
                            </NavLink>
                        </div>
                        <div className="pt-4">
                            <h1>{(item?.name || item?.title).length > 50 ? (item?.name || item?.title).slice(0,27) : (item?.name || item?.title) }</h1>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default DisplayMovieList
