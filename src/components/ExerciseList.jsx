import React from 'react';
import ExerciseItem from './ExerciseItem';
const ExerciseList = (props) => {
	const { exercises, onRemove } = props;
	const exercisesList = exercises.map((exercise) => {
		return (
			<div key={exercise.name}>
				<ExerciseItem
					name={exercise.name}
					sets={3}
					reps={10}
					muscleGroup={exercise.muscle}
					equipment={exercise.equipment}
					instructions={exercise.instructions}
					onRemove={() => onRemove(exercise.name)}
				/>
				<br />
			</div>
		);
	});

	return <div>{exercisesList}</div>;
};

export default ExerciseList;
