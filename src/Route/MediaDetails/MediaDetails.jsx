import React, { useEffect, useState } from 'react'
import tmdbApi from '../../apis/tmdb.api.js'
import { api_config } from '../../apis/api.configs.js'
import { BsPlayFill, BsStarFill } from 'react-icons/bs'
import dayjs from 'dayjs'

const MediaDetails = () => {
    const [dataDetailsofMovie, setDataDetailsofMovie] = useState([])
    const pathname = location.pathname.split('/')
    const mediaType = pathname[1]
    const mediaId = pathname[2]

    const getDetailsOfMovie = async () => {
        const response = await tmdbApi.getMediaDetail(mediaType, mediaId)
        setDataDetailsofMovie(response)

    }

    useEffect(() => {
        getDetailsOfMovie()
    }, [])
    console.log(dataDetailsofMovie)
    const realease_Year = dayjs(dataDetailsofMovie?.release_date).format('YYYY')
    const realease_date = dayjs(dataDetailsofMovie?.release_date).format('MMM DD, YY')
    const hour = Math.floor(dataDetailsofMovie?.runtime / 60)
    const minutes = dataDetailsofMovie?.runtime % 60
    const runtime = hour + 'h ' + minutes + 'm'

    return (dataDetailsofMovie?.backdrop_path && <div style={{ backgroundImage: `url(${api_config.originalImage(dataDetailsofMovie?.backdrop_path)})` }} className="bg-center bg-cover bg-sky-500/75 bg-no-repeat -Z-20 h-screen w-full">
        <div className="bg-black/60 w-full h-screen px-0 md:px-14 lg:px-52">
            <div className="pt-52 sm:pt-40 md:pt-32">
                <div className="md:flex h-full w-full gap-x-10 px-2 md:px-0">
                    <div className="h-[520px] w-full md:w-[300px] lg:w-[320px]">
                        <img
                            className="h-full w-full object-center rounded-2xl shadow-lg `"
                            src={api_config.w500Image(dataDetailsofMovie?.poster_path || backdrop_path)} alt={dataDetailsofMovie?.name || dataDetailsofMovie?.title} />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-white text-2xl lg:text-3xl">
                            {dataDetailsofMovie?.name || dataDetailsofMovie?.title}
                            <span>({realease_Year})</span>
                        </h1>
                        <h1 className="text-gray-500 text-lg font-normal italic">
                            {dataDetailsofMovie?.tagline}
                        </h1>
                        <div className="flex gap-x-5 text-md w-full">
                            {dataDetailsofMovie?.genres?.map((item) => <div className="bg-rose-600 px-2 rounded-lg text-white" key={item?.id}>
                                <h1>{item.name}</h1>
                            </div>)}
                        </div>

                        <div className="flex gap-x-2 items-center justify-start text-white">
                            {(dataDetailsofMovie?.vote_average * 5 / 10).toFixed(2)} / 5 <BsStarFill className="text-yellow-500" />
                        </div>

                        <div className="w-[400px] lg:w-[600px] text-white">
                            <h1 className="text-xl">Overview</h1>
                            <h1>{dataDetailsofMovie?.overview}</h1>
                        </div>

                        <div className="text-gray-500 grid grid-cols-1 gap-y-2 md:grid-cols-2 lg:grid-cols-12 w-full lg:border-b lg:border-gray-600 ">
                            <h1 className="col-span-3">Status: <span className="text-white">{dataDetailsofMovie?.status}</span></h1>
                            <h1 className="col-span-4">Realease Date: <span className=" text-white">{realease_date}</span></h1>
                            <h1 className="col-span-5 lg:flex lg:justify-center">runtime: <span className="text-white ml-1">{runtime}</span></h1>
                        </div>

                        <div className="flex gap-x-3 items-center mt-3">
                            <button>
                                <BsPlayFill size={50} className="text-red-500 w-32 bg-red-500/50 hover:bg-red-600" />
                            </button>
                            <h1 className="text-white text-2xl font-thin">
                                Watch Trailers
                            </h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>)
}

export default MediaDetails
