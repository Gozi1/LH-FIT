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
  //returns a number list of instructions
  const instructionHtml = instructions.split(',').map((sentence,index)=>{
    return (
    <>
    <p>{index+1}. {sentence}</p>
    <br/>
    </>)
  })
  const [toggleInstruction,setToggleInstruction] = useState(false)
  return (
    <div className={styles['current-exercise-container']} onClick={()=>{setToggleInstruction(!toggleInstruction)}}>
      <div className = {styles['exercise-positioner']}>
      <h3>{name}</h3> 
      {onAdd && 
      <BsPatchPlus onClick = {onAdd}/>}
      {onRemove && 
      <BsPatchMinus onClick = {onRemove}/>}</div>
      
      <div className = {styles['exercise-positioner']} >
      <div>
      <p>Muscle Group : {muscleGroup}</p>
      <p>Equipment Needed: {equipment}</p>
      </div>
      <div className={styles['set-reps-container']}>  
        <p>Sets : {sets}</p>
        <p>Reps : {reps}</p> 
      </div>
      </div>
      
       <article className = {toggleInstruction? styles['instruction-show']:styles['instruction-hide']} >
        {instructionHtml}
      </article>
      </div>
      
  )
}

export default CurrentExerciseItem