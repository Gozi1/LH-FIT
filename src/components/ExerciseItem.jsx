import React from 'react'
import styles from '../styles/Exercise.module.scss'
import { useState } from 'react'
import { BsPatchMinus,BsPatchPlus } from "react-icons/bs";
const CurrentExerciseItem = (props) => {
  const {name, 
    sets, 
    reps, 
    muscleGroup, 
    equipment, 
    instructions, 
    onAdd, 
    onRemove} = props 

  const [toggleInstruction,setToggleInstruction] = useState(false)
  return (
    <div className={styles['current-exercise-container']} onClick={()=>{setToggleInstruction(!toggleInstruction)}}>
      <h3>{name}</h3>
      <p>Muscle Group : {muscleGroup}</p>
      <p>Equipment Needed: {equipment}</p>
      <div className={styles['set-reps-container']}>  
        <p>{sets}</p>
        <p>{reps}</p> 
      </div>
      {onAdd && 
      <BsPatchPlus onClick = {onAdd}/>}
      {onRemove && 
      <BsPatchMinus onClick = {onRemove}/>}
       <article className = {toggleInstruction? styles['instruction-show']:styles['instruction-hide']} >
        {instructions}
      </article>
      </div>
      
  )
}

export default CurrentExerciseItem