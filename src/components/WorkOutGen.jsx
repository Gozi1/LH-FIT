import React from 'react'
import { useState } from 'react'
import styles from '../styles/WorkOutGen.module.css'
const WorkOutGen = () => {
  const [params,setParams] = useState({
    difficulty: '',
    type:'',
    muscleGroup: [],
    numberOfExercises:6
  })
  const handleParams = (objectKey,Value) =>{
    setParams(prevState => ({
                ...prevState,
                [objectKey]: Value
            }));
  }
  return (
    <div className={styles['work-out-gen']}>
      <div className={styles['difficulty-container']}>
        <button 
        onClick={()=>
          {params.difficulty === 'beginner' ? 
          handleParams('difficulty',''):handleParams('difficulty','beginner')}}
        className={params.difficulty === 'beginner'?styles['difficuly-button-unselected']:styles['difficuly-button-selected']}>
          Beginner
          </button>
        <button>Intermediate</button>
        <button>Expert</button>
      </div>
    </div>
  )
}

export default WorkOutGen