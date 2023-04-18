import React from 'react';
import ExerciseItem from './ExerciseItem';
import { useState,useEffect } from 'react';
import useGetUser from '../hooks/useGetUser';
import { useCookies } from 'react-cookie';
import Error from './Error';
import { useRouter } from 'next/router';
const ExerciseList = (props) => {
	const {push} = useRouter();
	const { exercises, onRemove, type, updateArray } = props;
	const [edit, setEdit] = useState(false);
	// const {user} = useGetUser()
	const [routine, setRoutine] = useState();
	const [error, setError] = useState(null);
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
		if(routine === undefined || routine.name === undefined || routine.name === ''){
			setError('Please enter a name for your routine');
			return;
		}
		else if(routine.name.length > 50 ){
			setError('Routine name must be less than 50 characters');
			return;
		}
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
				push('/my-routines')
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
					weight={exercise.weight}
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
			{error && <Error message={error} onCancel={setError} />}
		</div>
	);
};

export default ExerciseList;
