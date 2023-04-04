import React from 'react'
import { useState } from 'react'
import styles from '../styles/WorkOutGen.module.scss'
import Button from './Button'
import MuscleContainer from './MuscleContainer'
const WorkOutGen = () => {
  const [params,setParams] = useState({
    difficulty: '',
    type:'',
    muscleGroup: '',
    numberOfExercises:6
  })
  const handleParams = (objectKey,Value) =>{
    setParams(prevState => ({
                ...prevState,
                [objectKey]: Value.toLowerCase()
            }));
  }
  return (
    <div className={styles['work-out-gen']}>
      <div className={styles['work-out-container-difficulty']}>
        <Button name = 'Beginner'  keyName = 'difficulty' handleParams = {handleParams}params = {params}/>
        <Button name = 'Intermediate'  keyName = 'difficulty' handleParams = {handleParams}params = {params}/>
        <Button name = 'Expert'  keyName = 'difficulty' handleParams = {handleParams}params = {params}/>
      </div>

      <div className={styles['work-out-container-type']}> 
      <Button name = 'Strength'  keyName = 'type' handleParams = {handleParams}params = {params}/>
      <Button name = 'Endurance'  keyName = 'type' handleParams = {handleParams}params = {params}/>
      <Button name = 'Hypertrophy'  keyName = 'type' handleParams = {handleParams}params = {params}/>
         </div>
      {/*
      Stretch Feature maybe .... 
      <div className={styles['equipment-container']}></div> */}
      <MuscleContainer handleParams = {handleParams} />  
      <br/>   
      <button className={styles['submit']}>Submit</button>
    </div>
  )
}

export default WorkOutGen

