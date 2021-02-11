import React from 'react'

const YoutubeVideos = props => {
  const video = props.videos.map(video => {
    const url = 'https://www.youtube.com/embed/' + video.id.videoId

    return (
      <div key={video.id.videoId}>
        <h2>{video.title}</h2>
        <iframe
          id='ytplayer'
          type='ytplayer'
          width='480'
          height='270'
          src={url}
          frameBorder='0'
        />
      </div>
    )
  })

  return <div>{video}</div>
}

export default YoutubeVideos
