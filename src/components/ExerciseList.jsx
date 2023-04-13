import React from 'react';
import ExerciseItem from './ExerciseItem';
const ExerciseList = (props) => {
	const { exercises, onRemove } = props;
	const exercisesList = exercises.map((exercise) => {
		return (
			<div key={exercise.name}>
				<ExerciseItem
					exercise ={exercise}
					sets={3}
					reps={10}
          weights={10}
					onRemove={() => onRemove(exercise.name)}
				/>
				<br />
			</div>
		);
	});

	return <div>{exercisesList}</div>;
};

export default ExerciseList;
