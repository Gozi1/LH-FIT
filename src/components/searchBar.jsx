import { React, useEffect, useState } from 'react';
import styles from '../styles/search.module.css';
import axios from 'axios';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  // search to api
  // get a varible that saves whats in search bar
  // make a function that handles submit request/takes response data (search by name - stretch)
  // 

	const [input, setInput] = useState('');

	const handleSubmit = () => {
		setParams((prev) => ({ ...prev, name: input }));
		setInput('');
	};

	// useEffect(() => {
	// 	if (params.name) {
	// 		const options = {
	// 			method: 'GET',
	// 			url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
	// 			params: { name: params.name, muscle: '', type: '' },
	// 			headers: {
	// 				'X-RapidAPI-Key':
	// 					'87b5ef7ecemsh3744aa57e06b7f7p1b5fffjsn04eef49b9efc',
	// 				'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com',
	// 			},
	// 		};

	// 		axios
	// 			.request(options)
	// 			.then(function (response) {
	// 				// console.log(response.data);
	// 				setParams((prev) => ({ ...prev, exercises: response.data }));
	// 			})
	// 			.catch(function (error) {
	// 				console.error(error);
	// 			});
	// 	}
	// }, [params.name]);

	return (
		<form
			className={styles['search-form']}
			onSubmit={(event) => event.preventDefault()}
			autoComplete='off'
		>
			<div className={styles['search-bar']}>
				<input
					placeholder='Search by muscle group'
					type='text'
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className={styles['search-bar']}
				></input>
			</div>
			<div>
				<BsSearch className={styles['search-button']} onClick={handleSubmit} />
			</div>
			<div>
				{/* {params.exercises.map((exercise, i) => (
					<div key={i} className={'search-result'}>
						{exercise.name}
					</div>
				))} */}
			</div>
		</form>
	);
};

export default SearchBar;
