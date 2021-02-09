import React from 'react'

const InputWord = props => {
  return (
    <>
      <input onChange={props.onChange} value={props.keyword} />
    </>
  )
}

export default InputWord
