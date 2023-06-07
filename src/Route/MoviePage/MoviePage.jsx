import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovie } from '../../apis/module/movies.api.js'
import DisplayMovieList from './DisplayMovieList.jsx'
import { api_config } from '../../apis/api.configs.js'
import { NavLink } from 'react-router-dom'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const MoviePage = () => {
    const dispatch = useDispatch()
    const { popular, top_rated, upcoming } = useSelector(state => state.movie)
    console.log('popular >>>', popular);
    const [show, setShow] = useState({
        loading: false,
        displayMovieType: null
    })
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
                <DisplayMovieList list={show.displayMovieType} />
            )
        }
    }

    return (
        <div className="w-full text-white">
            <div className="px-10 mt-24">
                <div className="w-fit h-fit">
                    <h1 className="text-3xl uppercase text-white text-yellow-500 mt-28 font-mono tracking-normal">
                        watch all new <span
                        style={{ textShadow: '3px 3px #FF0000' }}
                        className="text-5xl text-orange-500">movie</span>
                    </h1>
                </div>

                <div className="flex item-center gap-x-1 h-12 w-full mt-4">
                    <div
                        className={`h-full w-36 flex item-center justify-center border-b-2 bg-[#232323] shadow-lg hover:border-orange-500 hover:bg-[#363636] border-red-500 ${show.loading === true && show.displayMovieType === popular ? 'bg-[#363636]' : 'bg-[#232323]'}`}>
                        <button
                            onClick={(e) => clickBtn(e)}
                            type="button"
                            name="popular"
                            className="w-full h-full text-2xl uppercase">
                            popular
                        </button>
                    </div>
                    <div
                        className={`h-full w-36 flex item-center justify-center border-b-2 bg-[#232323] shadow-lg hover:border-orange-500 hover:bg-[#363636] border-red-500 ${show.loading === true && show.displayMovieType === top_rated ? 'bg-[#363636]' : 'bg-[#232323]'}`}>
                        <button
                            onClick={(e) => clickBtn(e)}
                            type="button"
                            name="top_rated"
                            className="text-2xl uppercase w-full h-full">
                            {`top_rated`.replace('_', ' ')}
                        </button>
                    </div>

                    <div
                        className={`h-full w-36 flex item-center justify-center border-b-2 bg-[#232323] shadow-lg hover:border-orange-500 hover:bg-[#363636] border-red-500 ${show.loading === true && show.displayMovieType === upcoming ? 'bg-[#363636]' : 'bg-[#232323]'}`}>
                        <button
                            onClick={(e) => clickBtn(e)}
                            type="button"
                            name="upcoming"
                            className="text-2xl uppercase w-full h-full">
                            upcoming
                        </button>
                    </div>
                </div>
                {displayMovie()}
                {show.loading === false &&
                    <div className="grid grid-cols-5 mt-7">
                    {
                        popular?.map((item, index) =>
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
                                    <h1>{(item?.name || item?.title).length > 50 ? (item?.name || item?.title).slice(0, 27) : (item?.name || item?.title)}</h1>
                                </div>
                            </div>
                        )
                    }
                </div>}
            </div>
        </div>
    )
}

export default MoviePage
