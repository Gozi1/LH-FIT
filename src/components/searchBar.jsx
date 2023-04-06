import { React, useEffect, useState } from 'react';
import styles from '../styles/search.module.css';
import axios from "axios";

const SearchBar = () => {
  // search to api
  // get a varible that saves whats in search bar
  // make a function that handles submit request/takes response data (search by name - stretch)

  const [params, setParams] = useState({
    difficulty: "beginner",
    type: '',
    muscle: '',
    offset: 6,
    name: '',
    exercises: []
  })
 const [input, setInput] = useState("")

 const handleSubmit = () => {
  setParams(prev=>({...prev, name: input}));
  setInput("")
 }

 
  useEffect(() => {
    if(params.name) {
    const options = {
      method: 'GET',
      url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
      params: { name: params.name, muscle: '', type: '' },
      headers: {
        'X-RapidAPI-Key': '87b5ef7ecemsh3744aa57e06b7f7p1b5fffjsn04eef49b9efc',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
    }

    axios.request(options).then(function (response) {
      // console.log(response.data);
      setParams(prev => ({ ...prev, exercises: response.data }));
    }).catch(function (error) {
      console.error(error);
    });
  }
  }, [params.name])


  return (
    <main>
    <form className={styles['search-form']} onSubmit={event => event.preventDefault()} autoComplete='off' >
      <div className={styles['search-bar']}>
        <input placeholder='Search by muscle group' type='text' value={input} 
        onChange={(e) => setInput(e.target.value)} className={styles['search-bar']}></input>
      </div>
      <div>
        <button className={styles['search-button']} onClick={handleSubmit}>Search</button>
      </div>
    </form>
      <div>
        {(params.exercises).map((exercise, i) => <div key={i} className={"search-result"}>{exercise.name}</div>)}
      </div>
    </main>
  )
}

export default SearchBar;
