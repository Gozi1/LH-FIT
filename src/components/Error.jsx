import React from 'react'
import {BsX} from 'react-icons/bs'
const Error = (props) => {
  const {message,onCancel} = props
  return (
    <aside className = 'error'>
      <p>{message}</p>
      <BsX onClick = {()=>onCancel(null)}/>
      </aside>
  )
}

export default Error