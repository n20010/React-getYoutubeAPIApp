import React from 'react'
import ShowText from './component/showText'
import Key from './component/apiKey'
import InputWord from './component/inputWord'
import YoutubeVideos from './component/youtubeVideos'
import Wikipedia from './component/wikipedia/wikipedia'
//import Artisttest from './component/spotify'
import axios from 'axios'
import _ from 'lodash'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: [],
      keyword: '',
      textStatus: '↓Type search word↓'
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
    return (
      <>
        <ShowText textStatus={this.state.textStatus} />
        <InputWord onChange={this.handleChange} value={this.state.keyword} />
        <YoutubeVideos videos={this.state.videos} />
        <Wikipedia />
      </>
    )
  }
}

export default App
