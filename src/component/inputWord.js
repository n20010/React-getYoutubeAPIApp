import React from 'react'
import Input from '@material-ui/core/Input'
import { Button } from '@material-ui/core'

const InputWord = props => {
  return (
    <div class='InputBox'>
      <label for='InputBox'>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          onClick={props.handleChange}
        >
          検索
        </Button>
      </label>
      <Input
        id='InputBox'
        placeholder='Search on YouTube'
        value={props.keyword}
      />
    </div>
  )
}

export default InputWord
