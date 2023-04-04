import React from 'react'
import styles from '../styles/WorkOutGen.module.scss'

const MuscleContainer = (props) => {
  const {handleParams} = props
  const options = ['Abs', 'Formarms', 'Triceps', 'Bicep', 'Back'];
  const onOptionChangeHandler = (event) => {
      handleParams('muscleGroup',event.target.value)
  }
  return (
   <div className={styles['work-out-container-muscle']}>
  <select onChange={onOptionChangeHandler} required>
  <option key ='' hidden>Please choose one option</option>
  {options.map((option, index) => {
      return <option key = {index} >
          {option}
      </option>
  })}
</select>
</div>
  )
}

export default MuscleContainer
