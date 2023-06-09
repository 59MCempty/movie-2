import React from 'react'

export const Video = ({videoId}) => {
	return (
		<div className="h-[73%] mt-4">
			<iframe className="w-full h-full aspect-video" src={videoId}></iframe>
		</div>
	)
}
