import React from 'react'

const ShowText = props => {
  const header = 'Hello, User'
  return (
    <>
      <h1>{header}</h1>
      <h1>{props.textStatus}</h1>
    </>
  )
}
export default ShowText
