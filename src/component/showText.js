import React from 'react'

const ShowText = props => {
  const header = 'Hello, User'
  return (
    <>
      <h2>{header}</h2>
      <h2>{props.textStatus}</h2>
    </>
  )
}
export default ShowText
