import React from 'react'
import ShowText from './component/showText'
import Key from './component/apiKey'
import InputWord from './component/inputWord'
import YoutubeVideos from './component/youtubeVideos'
import axios from 'axios'
import _ from 'lodash'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: [],
      keyword: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  //文字の入力があった場合動作。三秒間文字の更新がなければAPIを取得
  handleChange = _.debounce(event => {
    //入力された文字をstateに格納
    this.setState({ keyword: event.target.value })

    // ${Key}にはGoogleAPIsで取得したAPIキーを格納
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=
                ${event.target.value}&maxResults=3&key=${Key}`

    //urlから動画データを取得、stateに格納。
    axios
      .get(url)
      .then(res => {
        this.setState({ videos: res.data.items })
      })
      .catch(() => {
        console.log('通信に失敗しました。')
      })
  }, 300)

  render () {
    return (
      <>
        <ShowText />
        <InputWord onChange={this.handleChange} value={this.state.keyword} />
        <YoutubeVideos videos={this.state.videos} />
      </>
    )
  }
}

export default App
