import React from 'react'
import { Button } from '@material-ui/core'

const YoutubeVideos = props => {
  const video = props.videos.map((video, i) => {
    const url = 'https://www.youtube.com/embed/' + video.id.videoId
    const title = video.snippet.title
    const titleCutted = title.slice(0, 19) + '...'

    return (
      <div key={video.id.videoId} className='videoBox'>
        <h2>{titleCutted}</h2>
        <iframe
          id='ytplayer'
          type='ytplayer'
          width='480'
          height='270'
          src={url}
          frameBorder='5'
        />
        <Button
          variant='outlined'
          color='primary'
          href={`https://www.youtube.com/channel/${video.snippet.channelId}`}
          target='_blank'
        >
          チャンネルに移動
        </Button>
      </div>
    )
  })

  return <>{video}</>
}

export default YoutubeVideos
