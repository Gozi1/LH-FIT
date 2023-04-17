import React from 'react';
import ExerciseItem from './ExerciseItem';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
const ExerciseList = (props) => {
	const { exercises, onRemove, type, updateArray } = props;
	const [edit, setEdit] = useState(false);
	const [routine, setRoutine] = useState();
	
	const [cookies, setCookie] = useCookies(['user_id', 'routine_id']);
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

	const setRoutineObject = (event) => {
		const { name, value } = event.target;
		setRoutine({ ...routine, name: value, userId: user });
	};

	const handleSubmit = async (event) => {
		async function postData(url = '', data = {}) {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});
			return response.json();
		}
		
		async function postTwice() {
			const routineOBJ = routine;
			const routineURL = 'http://localhost:8080/api/routines/';
			const enrollmentURL = 'http://localhost:8080/api/enrollments/';

			const routineID = await postData(routineURL, routineOBJ);
			setCookie('routine_id', routineID);
			// console.log(exercises);

			exercises.forEach(async (exercise) => {
				const exerciseOBJ = exercise;
				exerciseOBJ.routineID = routineID;
				// console.log(exerciseOBJ);
				const response = await postData(enrollmentURL, exerciseOBJ);
				console.log(response);
			});

		}
		
		postTwice();
	};

	//function that takes in an exercise and returns an exercise item
	const exercisesList = exercises.map((exercise, i) => {
		return (
			<div key={exercise.name}>
				<ExerciseItem
					exercise={exercise}
					sets={exercise.sets}
					reps={exercise.reps}
					weights={exercise.weights}
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
				<label>
					Name:
					<input type="text" name="name" onChange={setRoutineObject} />
				</label>
			{exercisesList}
			<button onClick={() => setEdit(!edit)}>Edit</button>
			{user && <button onClick={handleSubmit}>Submit</button>}
		</div>
	);
};

export default ExerciseList;
