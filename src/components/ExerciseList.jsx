import React from 'react';
import ExerciseItem from './ExerciseItem';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
const ExerciseList = (props) => {
	const { exercises, onRemove, type, updateArray } = props;
	const [edit, setEdit] = useState(false);
	
	const [cookies] = useCookies(['user_id']);
	const [user, setUser] = useState(null);
	useEffect(() => {
		const user_id = cookies['user_id'];
		if(user_id==='undefined'){
			setUser(null);
		}
		else{
		setUser(user_id);
		console.log(user)
		}
	}, [cookies]);
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
