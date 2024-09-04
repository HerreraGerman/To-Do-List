import React from 'react'
import Input from '../input'
import Button from '../button'

function Task({task}) {
  return (
    <li>
      <Input tipo={'checkbox'}></Input>
      <span>{task}</span>
      <Button clase={'delete'} button={'🗑️'}></Button>
    </li>
  )
}

export default Task