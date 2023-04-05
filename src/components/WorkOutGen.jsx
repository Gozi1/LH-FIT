import { useState } from 'react'
import styles from '../styles/WorkOutGen.module.scss'
import Button from './Button'
import MuscleContainer from './MuscleContainer'
import { useRouter } from 'next/router'

//props need (setCurrentParams)
// we choose a couple of params based on the user

const WorkOutGen = () => {
  const { push } = useRouter();
  const [params,setParams] = useState({
    difficulty: '',
    type:'',
    muscleGroup: '',
    numberOfExercises:6
  })
  const handleSubmit = () =>{
    //change globalcurrent params to this params 
    // redirect page to the show my exercises page 
    push('/my-workout')
  }
  const handleParams = (objectKey,Value) =>{
    setParams(prevState => ({
                ...prevState,
                [objectKey]: Value.toLowerCase()
            }));
  }

  console.log(params);

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
      <button className={styles['submit']} onClick={handleSubmit}>Submit</button>
      {/* make an error page if user choose nothing */}
    </div>
  )
}

export default WorkOutGen

