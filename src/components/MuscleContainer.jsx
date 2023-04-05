import React from 'react'
import styles from '../styles/WorkOutGen.module.scss'

const MuscleContainer = (props) => {
  const {handleParams} = props
  const options = ['Abs', 'Formarms', 'Triceps', 'Bicep', 'Back'];
  const onOptionChangeHandler = (event) => {
      handleParams('muscleGroup',event.target.value)
  }
  return (
   
  <select  className={styles['work-out-container-muscle']} onChange={onOptionChangeHandler} required>
  <option key ='' hidden>Please choose one Muscle Group</option>
  {options.map((option, index) => {
      return <option key = {index} >
          {option}
      </option>
  })}
</select>
  )
}

export default MuscleContainer