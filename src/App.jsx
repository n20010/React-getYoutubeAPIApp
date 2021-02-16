import React from 'react'
import ShowText from './component/showText'
import Key from './component/apiKey'
import InputWord from './component/inputWord'
import YoutubeVideos from './component/youtubeVideos'
import axios from 'axios'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: [],
      keyWord: '',
      textStatus: '↓Type keyWords↓'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleText = this.handleText.bind(this)
  }

  // inputに入力された文字をstate.keyWordへ挿入。
  handleText (event) {
    this.setState({ keyWord: event.target.value })
  }

  // 検索ボタンをクリックで動作。YoutubeAPIの取得。
  handleSubmit () {
    // ${Key}にはGoogleAPIsで取得したAPIキーを格納。
    // ヒットした動画を再生回数順で３つ表示。
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${this.state.keyWord}&order=viewCount&maxResults=3&key=${Key}`

    // urlから動画データを取得、state.videoに配列で格納。
    axios
      .get(url)
      .then(res => {
        this.setState({
          videos: res.data.items,
          textStatus: 'Successfully to get Youtube API'
        })
      })
      .catch(() => {
        this.setState({ textStatus: 'Failure to get YouTube API' })
      })
  }

  render () {
    return (
      <>
        <header>
          <div className='container header-container'>
            <div className='header-inner'>
              <h1>Youtube Searcher</h1>
            </div>
          </div>
        </header>

        <ShowText textStatus={this.state.textStatus} />
        <InputWord
          onClick={this.handleSubmit}
          onChange={this.handleText}
          value={this.state.keyWord}
        />
        <div className='wrapper'>
          <YoutubeVideos videos={this.state.videos} />
        </div>
      </>
    )
  }
}

export default App
