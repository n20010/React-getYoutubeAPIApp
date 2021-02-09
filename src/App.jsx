import React from 'react'
import ShowText from './component/showText'
import Key from './component/apiKey'
import InputWord from './component/inputWord'
import YoutubeVideos from './component/youtubeVideos'
import axios from 'axios'
import './App.css'

class App extends React.Component {
  constructor (props) {
    console.log('constructor')
    super(props)
    this.state = {
      videos: [],
      keyword: 'create-react-app'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    // ${Key}にはGoogleAPIsで取得したAPIキーを格納
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${event.target.value}&maxResults=3&key=${Key}`

    axios
      .get(url)
      .then(res => {
        this.setState({ videos: res.data.items })
      })
      .catch(() => {
        console.log('通信に失敗しました。')
      })

    this.setState({ keyword: event.target.value })
  }

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
