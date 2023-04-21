import React from 'react'
import {BsX} from 'react-icons/bs'
const Success = (props) => {
  const {message,onCancel} = props
  return (
    <aside className = 'success'>
      <p>Message: {message}</p>
      <BsX onClick = {()=>onCancel(null)}/>
      </aside>
  )
}

export default Success