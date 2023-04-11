import { useEffect, useState } from 'react';
import styles from '../styles/search.module.css';
import axios from 'axios';
import { BsSearch } from 'react-icons/bs';
import SearchList from './SearchList';

const SearchBar = (props) => {
	// search to api
	// get a varible that saves whats in search bar
	const { onAdd,params,setParams,searchResults,setSearchResults} = props;

	// const [params, setParams] = useState({
	// 	name: '',
	// 	difficulty: '',
	// 	type: '',
	// 	muscle: '',
	// 	exercises: []
	// });
	// const [exercises, setExercises] = useState([])
	const [input, setInput] = useState('');
	const [error, setError] = useState("");
	

	const handleSubmit = () => {
		setParams((prev) => ({ ...prev, name: input }));
		setInput('');
	};

	useEffect(() => {

		setSearchResults([]);

		const options = {
			method: 'GET',
			url: 'http://localhost:8080/api/exercises/search',
			params: { search: params.name }
		}
		console.log(options.params)
		axios.request(options)
			.then((response) => {
				//checks if response returns something 
				if(response.data.length<1)setError('Unable to find exercise')
				else setSearchResults(response.data);
			})
			.catch((error) => {
				console.log(error);
			});

	}, [params.name]);


	return (
		<div className={styles['search']}>
		<form
			className={styles['search-form']}
			onSubmit={(e) => e.preventDefault()}
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
			
		</form>
		<SearchList searchResults ={searchResults} onAdd = {onAdd} />
		</div>
				
		 
		
	);
};

export default SearchBar;
