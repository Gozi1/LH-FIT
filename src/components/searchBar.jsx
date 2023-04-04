import React from 'react'
import styles from '../styles/search.module.css'

const SearchBar = () => {
  // search to api
  // get a varible that saves whats in search bar
  // make a function that handles submit request/takes response data (search by name - stretch)
  // 


  return (
    <form className={styles['search-form']}>
      <input placeholder='Search by muscle group' className={styles['search-bar']}></input>
      <button className={styles['search-button']}>Search</button>
    </form>


  )
}

export default SearchBar;
