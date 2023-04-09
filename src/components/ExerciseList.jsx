import React from 'react'
import ExerciseItem from './ExerciseItem';

const ExerciseList = (props) => {
  const {exercises,onAdd,onRemove} = props;

  const exercisesList = exercises.map((exercise, i) =>{
    return (
      <>
      <ExerciseItem 
          key = {exercise.name}
          name = {exercise.name}  
          sets = {exercise.sets} 
          reps = {exercise.reps} 
          muscleGroup = {exercise.muscle} 
          equipment = {exercise.equipment}
          instructions = {exercise.instructions}
          onAdd = {() => onAdd(exercise)} 
          onRemove = {() => onRemove(exercise.name)}/>
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