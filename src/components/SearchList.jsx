import React, { useEffect, useState } from 'react'
import SearchItem from './SearchItem';
import styles from '../styles/search.module.css';
import Error from './Error';
const SearchList = (props) => {
  const {exercises,onAdd,error,setError} = props
  // use this in the search bar functionality
  // useEffect(()=>{
  //   console.log(exercises.length)
  //   if(exercises.length<1)setError('Unable to find exercise')
	// 	else setError(null)
  // },exercises)

  return (
    <ul >
      {exercises.map((exercise) => (
					<SearchItem key={exercise.name} exercise={exercise} onAdd={() => onAdd(exercise)}/>
      ))}
     {/* {error && <Error message ={error} onCancel = {setError}/>} */}
    </ul>
  )
}

export default SearchList