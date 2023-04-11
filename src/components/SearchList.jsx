import React from 'react'
import SearchItem from './SearchItem';
import styles from '../styles/search.module.css';
import {useEffect, useState } from 'react';
import Error from './Error';
const SearchList = (props) => {
  const {searchResults, onAdd} = props
  
  const [error,setError] = useState('')

  useEffect(()=>{
    //checks if response returns something 
    if(searchResults.length<1)setError('Unable to find exercise')
    else setError(null)
  },[searchResults])
  
  return (
    <ul className={styles['search-list']}>
      {searchResults.map((searchResult) => (
					<SearchItem key={searchResult.name} searchResult={searchResult} onAdd={() => onAdd(searchResult)}/>
      ))}

       {error && <Error message = {error} onCancel = {setError}/>}
      
    </ul>
  )
}

export default SearchList