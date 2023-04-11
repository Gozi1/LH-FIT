import React from 'react'
import ExerciseItem from './ExerciseItem';
const ExerciseList = (props) => {
  const { params ,exercises, onAdd, onRemove } = props;
  const exercisesList = exercises.map((exercise) => {
    return (
      <div key={exercise.name}>
          <ExerciseItem
            name={exercise.name}
            sets={params.sets}
            reps={params.reps}
            muscleGroup={exercise.muscle}
            equipment={exercise.equipment}
            instructions={exercise.instructions}
            onAdd={() => onAdd(exercise)}
            onRemove={() => onRemove(exercise.name)} />
          <br />
      </div>
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