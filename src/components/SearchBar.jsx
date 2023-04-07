import { React, useEffect, useState } from 'react';
import styles from '../styles/search.module.css';
import axios from 'axios';
import { BsSearch } from 'react-icons/bs';
import SearchItem from './SearchItem';
import useFetchApi from '@/hooks/useFetchApi';
import { Loading } from '@nextui-org/react';

const SearchBar = (props) => {
	// search to api
	// get a varible that saves whats in search bar
	// make a function that handles submit request/takes response data (search by name - stretch)
	//
	const { onAdd } = props;

	const [params, setParams] = useState({
		name: '',
		exercises: [],
	});
	const [input, setInput] = useState('');

	const handleSubmit = () => {
		setParams((prev) => ({ ...prev, name: input }));
		setInput('');
	};
const successFunc = (data) => {
	setParams((prev) => ({ ...prev, exercises: data }));
}
const errorFunc = (error) => {
	console.log(error);
}
// fetch data from api
	const { mode } = useFetchApi(
		params.name,
		{ search: params.name },
		'http://localhost:8080/api/exercises/search',
		'GET',
		successFunc,
		errorFunc
	);

	return (
		<form
			className={styles['search-form']}
			onSubmit={(e) => e.preventDefault()}
			autoComplete='off'
		>
			<div className={styles['search-bar']}>
				<input
					placeholder='Search by exercise name'
					type='text'
					value={input}
					onChange={(e) => setInput(e.target.value)}
				  className={styles['search-bar-input']}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							handleSubmit();
						}
					}}
				/>
				<BsSearch className={styles['search-button']} onClick={handleSubmit} />
			</div>
			<div>
				{mode === 'LOADING' && <Loading message='awaiting results'></Loading>}
				{mode === 'SHOW' && 
					params.exercises.map((exercise) => (
						<SearchItem
							key={exercise.name}
							name={exercise.name}
							onAdd={() => onAdd(exercise)}
						/>
						// <SearchList
						// 	key={exercise.name}
						// 	name={exercise.name}
						// 	sets={3}
						// 	reps={10}
						// 	muscleGroup={exercise.muscle}
						// 	equipment={exercise.equipment}
						// 	instructions={exercise.instructions}
						// 	onAdd={() => onAdd(exercise)}
						// 	onRemove={() => onRemove(exercise.name)}
						//  />
						// <div key={i} className={'search-result'}>
						// 	{exercise.name}
						// </div>
					))}
			</div>
		</form>
	);
};

export default SearchBar;
