import React from 'react'
import YouTube from "react-youtube"
const VideoModal = ({video,setClass}) => {

    const opts = {
      height: '350',
      width: '350',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,

    },
  };
    return (
        <div>
            <span onClick={setClass} className='bg-light'><a>X</a></span>
            <YouTube videoId={video} opts={opts} />
        </div>
    )
}

export default VideoModal
