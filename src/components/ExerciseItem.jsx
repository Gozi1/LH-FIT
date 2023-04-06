import React from 'react'
import styles from '../styles/Exercise.module.scss'
import { useState } from 'react'
import { BsPatchMinus,BsPatchPlus,BsCaretDown } from "react-icons/bs";
const CurrentExerciseItem = (props) => {
  const {id,name, 
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
    <div key={index}>
    <p>{index+1}. {sentence}</p>
    <br/>
    </div>)
  })
  const [toggleInstruction,setToggleInstruction] = useState(false)
  return (
    <div className={styles['current-exercise-container']} >
      <div className = {styles['exercise-positioner']}>
      <h3>{name}</h3> 
      {onAdd && 
      <BsPatchPlus onClick = {()=>onAdd(id)}/>}
      {onRemove && 
      <BsPatchMinus onClick = {()=>onRemove(id)}/>}</div>
      
      <div className = {styles['exercise-positioner']} >
      <div>
      <p>Muscle Group : {muscleGroup}</p>
      <p>Equipment Needed: {equipment}</p>
      </div>
      <div className={styles['set-reps-container']}>  
        <p>Total Sets : {sets}</p>
        <p>Target Reps : {reps}</p> 
      </div>
      </div>
      <div className={styles['instructions-container']}>

      <BsCaretDown className={toggleInstruction&&styles['svg-flipper']}onClick={()=>{setToggleInstruction(!toggleInstruction)}} />
       <article className = {toggleInstruction? styles['instruction-show']:styles['instruction-hide']} >
        {instructionHtml}
      </article>
      </div>
      </div>
      
  )
}

export default CurrentExerciseItem