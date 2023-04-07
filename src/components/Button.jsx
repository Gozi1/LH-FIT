import React from 'react'
import styles from '../styles/WorkOutGen.module.scss'


const Button = (props) => {
  const {name,keyName,handleParams,params,tooltip} = props
  return (
    <button 
        onClick={()=>
          {params[keyName] === name ? 
          handleParams(keyName,''):handleParams(keyName,name)}}

        className={params[keyName] === name.toLowerCase()? styles['focus']:styles['button']}
        data-text ={tooltip}>
          {name}
          </button>
  )
}

export default Button