import ExerciseList from '@/components/ExerciseList';
import WorkOutGen from '../components/WorkOutGen';
import styles from '../styles/WorkOutGen.module.scss';
import SearchBar from '@/components/SearchBar';

import { useEffect, useState } from 'react';
import useFetchApi from '@/hooks/useFetchApi';
function HomePage() {


	const [params, setParams] = useState({
		difficulty: '',
		type: '',
		muscle: '',
		// numberOfExercises: 6,
	});
	const [showResults, setShowResults] = useState(false);
	//adds keys (sets,weight,reps) to exercises
	const addKeys = (exercises, type = '') => {
		const Obj = {
			"hypertrophy": { sets: 4, reps: 12 },
			"strength": { sets: 5, reps: 6 },
			"endurance": { sets: 4, reps: 20 },
			'': { sets: 3, reps: 10 },
		};
		return exercises.map((exercise) => {
			exercise.sets = Obj[type].sets;
			exercise.reps = Obj[type].reps;
			exercise.equipment === ("none" || "body_only") ? exercise.weight = 0 : exercise.weight = 10;
			return exercise;
		});
	};
	const [exercises, setExercises] = useState();


	const sucessFunc = (data) => {
		console.log('DATA', data);
		setExercises(addKeys(data, params.type));
	}
	const errorFunc = (error) => {
		console.log('ERROR', error);
	}
	//make a function that index the key value and the new value and updates the  state array
	const updateArray = (index, key, value) => {
		const newArray = [...exercises];
		newArray[index][key] = value;
		setExercises(newArray);
	};
	// function that removes exercise from the array
	const handleRemove = (name) => {
		const newExercises = exercises.filter((e) => e.name !== name);
		setExercises(newExercises);
	};
	// function that adds exercise to the array
	const handleAdd = (exercise) => {
		const newExercises = { ...exercise, sets: 0, reps: 0, weight: 0 };
		setExercises((prev) => [...prev, newExercises]);
	};
	// fetches the exercises from the api
	const { mode } = useFetchApi(showResults,
		params,
		'http://localhost:8080/api/exercises',
		'GET',
		sucessFunc,
		errorFunc)

	return (
		<div className={styles['page-layout']}>
			{!showResults && (
				<WorkOutGen
					params={params}
					setParams={setParams}
					setShowResults={setShowResults}
				/>
			)}
			{mode === 'SHOW' && showResults && (
				<div className={styles['work-out-search-div']}>
					<SearchBar
						exercises={exercises}
						params={params}
						setParams={setParams}
						onAdd={handleAdd}
					/>
				</div>
			)}

			{mode === 'SHOW' && showResults && (
				<ExerciseList
					exercises={exercises}
					onRemove={handleRemove}
					updateArray={updateArray}
				/>
			)}
		</div>
	);
}

export default HomePage;