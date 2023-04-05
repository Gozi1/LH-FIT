import React from 'react'
import ExerciseItem from './ExerciseItem';
const ExerciseList = (props) => {
  const {exercises,onAdd,onRemove} = props;
  console.log(exercises[0])
  console.log('hello')
  const exercisesList = exercises.map((exercise, i) =>{
    return (
      <>
      <ExerciseItem 
          key={i} 
          name = {exercise.name}  
          sets = {3} 
          reps = {10} 
          muscleGroup = {exercise.muscle} 
          equipment = {exercise.equipment}
          instructions = {exercise.instructions}
          onAdd = {onAdd} 
          onRemove = {onRemove}/>
          <br/>
          </>
      )
   }
  )

  return (
    <div>
     {exercisesList}
    </div>
  )
}

export default ExerciseList