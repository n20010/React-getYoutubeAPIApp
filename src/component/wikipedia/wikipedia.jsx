import React from 'react'
import axios from 'axios'

class Wikipedia extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      result: null,
      URI:
        'http://ja.wikipedia.org/w/api.php?format=json&action=query&list=random&rnnamespace=0&rnlimit=2'
    }
  }

  componentDidMount () {
    window
      .fetch(this.state.URI)
      .then(res => res.json())
      .then(res => this.setState({ result: res }))
  }

  render () {
    if (!this.state.result) return <div>Now Loading...</div>
    return (
      <>
        <h4>{this.state.URI}</h4>
      </>
    )
  }
}

export default Wikipedia
