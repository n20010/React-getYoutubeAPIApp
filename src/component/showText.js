import React from 'react'

class ShowText extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: 'Hello, User',
      nav: '↓Type SerchWord↓'
    }
  }

  render () {
    return (
      <>
        <RenderText state={this.state.text} />
        <RenderText state={this.state.nav} />
      </>
    )
  }
}

const RenderText = props => {
  return <h1>{props.state}</h1>
}
export default ShowText
