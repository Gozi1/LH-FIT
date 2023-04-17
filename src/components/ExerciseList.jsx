import React from 'react';
import ExerciseItem from './ExerciseItem';
import { useState } from 'react';
import useGetUser from '../hooks/useGetUser';
const ExerciseList = (props) => {
	const { exercises, onRemove, type, updateArray } = props;
	const [edit, setEdit] = useState(false);
	const {user} = useGetUser()
	//function that takes in an exercise and returns an exercise item
	const exercisesList = exercises.map((exercise, i) => {
		return (
			<div key={exercise.name}>
				<ExerciseItem
					exercise={exercise}
					edit={edit}
					onRemove={() => onRemove(exercise.name)}
					updateArray={updateArray}
					index={i}
				/>
				<br />
			</div>
		);
	});

	return (
		<div>
			{exercisesList}
			<button onClick={() => setEdit(!edit)}>Edit</button>
			{user && <button onClick={() => console.log(user)}>Submit</button>}
		</div>
	);
};

export default ExerciseList;
