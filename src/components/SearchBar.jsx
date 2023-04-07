import { React, useEffect, useState } from 'react';
import styles from '../styles/search.module.css';
import axios from 'axios';
import { BsSearch } from 'react-icons/bs';
import SearchItem from './SearchItem';

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

	useEffect(() => {
		if (params.name) {
			const options = {
				method: 'GET',
				url: 'http://localhost:8080/api/exercises/search',
				params: { search: params.name },
			};
			axios
				.request(options)
				.then((response) => {
					console.log(options)
					console.log(response);
					setParams((prev) => ({ ...prev, exercises: response.data }));
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [params.name]);

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
				{params.exercises.map((exercise) => (
					<SearchItem
						key={exercise.name}
						name={exercise.name}
						onAdd={() => onAdd(exercise)}
					/>
					
				))}
			</div>
		</form>
	);
};

export default SearchBar;
