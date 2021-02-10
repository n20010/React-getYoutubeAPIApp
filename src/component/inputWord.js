import React from 'react'
import Input from '@material-ui/core/Input'

const InputWord = props => {
  return (
    <>
      <Input
        placeholder='Search word on YouTube'
        onChange={props.onChange}
        value={props.keyword}
      />
    </>
  )
}

export default InputWord
