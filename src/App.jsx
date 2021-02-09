import React from 'react'
import Key from './apiKey'
import InputWord from './component/inputWord'
import YoutubeVideos from './component/youtubeVideos'
import axios from 'axios'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: 'Hello, User',
      data: 'Initial Page',
      videos: [],
      keyword: 'Initial'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    // ${Key}にはGoogleAPIsで取得したAPIキーを格納
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${this.state.keyword}&maxResults=3&key=${Key}`

    axios
      .get(url)
      .then(res => {
        this.setState({ videos: res.data.items })
      })
      .catch(() => {
        console.log('通信に失敗しました。')
      })
  }

  handleChange (event) {
    this.setState({ keyword: event.target.value })
  }

  render () {
    console.log(this.state.videos)
    console.log(this.state.keyword)
    return (
      <>
        <ShowText state={this.state.text} />
        <ShowText state={this.state.data} />
        <InputWord onChange={this.handleChange} value={this.state.keyword} />
        <YoutubeVideos videos={this.state.videos} />
      </>
    )
  }
}

const ShowText = props => {
  return <h1>{props.state}</h1>
}

export default App
