import React from 'react'
import ExerciseItem from './ExerciseItem';
const ExerciseList = (props) => {
  const {exercises,onAdd,onRemove} = props;
  const exercisesList = exercises.map((exercise, i) =>{
    return (
      <>
      <ExerciseItem 
          key = {i}
          id = {i}
          // id = {exercise.id}
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