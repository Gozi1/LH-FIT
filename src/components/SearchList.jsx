import React from 'react'
import SearchItem from './SearchItem';
import styles from '../styles/search.module.css';
import {useEffect, useState } from 'react';
import Error from './Error';
const SearchList = (props,onAdd) => {
  const {exercises} = props
  
  const [error,setError] = useState('')

  useEffect(()=>{
    //checks if response returns something 
    if(exercises.length<1)setError('Unable to find exercise')
    else setError(null)
  },[exercises])
  
  return (
    <ul className={styles['search-list']}>
      {exercises.map((exercise) => (
					<SearchItem key={exercise.name} exercise={exercise} onAdd={() => onAdd(exercise)}/>
      ))}

       {error && <Error message = {error} onCancel = {setError}/>}
      
    </ul>
  )
}

export default SearchList