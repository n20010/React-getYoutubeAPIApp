import React from 'react'
import ShowText from './component/showText'
import Key from './component/apiKey'
import InputWord from './component/inputWord'
import YoutubeVideos from './component/youtubeVideos'
//import Artisttest from './component/spotify'
import axios from 'axios'
import _ from 'lodash'
import { Button } from '@material-ui/core'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: [],
      keyword: '',
      textStatus: '↓Type Keywords↓'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  //YoutubeAPIの取得。
  //検索文字の入力中、500ms間更新がなければ動作。
  handleChange = _.debounce(event => {
    //入力された文字をstate.keywordに格納
    this.setState({ keyword: event.target.value })

    // ${Key}にはGoogleAPIsで取得したAPIキーを格納。
    // ヒットした動画を再生回数順で３つ表示。
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=
                ${event.target.value}&order='viewCount'&maxResults=3&key=${Key}`
    //urlから動画データを取得、state.videoに配列で格納。
    axios
      .get(url)
      .then(res => {
        console.log(res.data)
        this.setState({
          videos: res.data.items,
          textStatus: 'Successfully to get Youtube API'
        })
      })
      .catch(() => {
        this.setState({ textStatus: 'Failure to get YouTube API' })
      })
  }, 500)

  render () {
    const title =
      'ホロライブ3ndオリジナルキャラクターソングうおうおうおうおうおうおうおうおうおううお'
    const titleCutted = title.slice(0, 19) + ' .....'
    return (
      <>
        <header>
          <div class='container header-container'>
            <div class='header-inner'>
              <h1>Youtube Searcher</h1>
            </div>
          </div>
        </header>

        <ShowText textStatus={this.state.textStatus} />
        <InputWord
          handleChange={this.handleChange}
          value={this.state.keyword}
        />
        <YoutubeVideos videos={this.state.videos} />
        <table key='hello'>
          <tbody>
            <td>
              <tr>
                <h3>{titleCutted}</h3>
                <iframe
                  id='ytplayer'
                  type='ytplayer'
                  width='480'
                  height='270'
                  src={'https://www.youtube.com/embed/' + 'vyUYybXWtak'}
                  frameBorder='0'
                />
              </tr>
              <tr>
                <Button
                  variant='outlined'
                  color='primary'
                  href={`https://www.youtube.com/channel/UCJFZiqLMntJufDCHc6bQixg`}
                  target='_blank'
                >
                  チャンネルに移動
                </Button>
              </tr>
            </td>
            <td>
              <tr>
                <h3>{titleCutted}</h3>
                <iframe
                  id='ytplayer'
                  type='ytplayer'
                  width='480'
                  height='270'
                  src={'https://www.youtube.com/embed/' + 'vyUYybXWtak'}
                  frameBorder='0'
                />
              </tr>
              <tr>
                <Button
                  variant='outlined'
                  color='primary'
                  href={`https://www.youtube.com/channel/UCJFZiqLMntJufDCHc6bQixg`}
                >
                  チャンネルに移動
                </Button>
              </tr>
            </td>
            <td>
              <tr>
                <h3>{titleCutted}</h3>
                <iframe
                  id='ytplayer'
                  type='ytplayer'
                  width='480'
                  height='270'
                  src={'https://www.youtube.com/embed/' + 'vyUYybXWtak'}
                  frameBorder='0'
                />
              </tr>
              <tr>
                <Button
                  variant='outlined'
                  color='primary'
                  href={`https://www.youtube.com/channel/UCJFZiqLMntJufDCHc6bQixg`}
                >
                  チャンネルに移動
                </Button>
              </tr>
            </td>
          </tbody>
        </table>
      </>
    )
  }
}

export default App
