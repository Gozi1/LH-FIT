import React from 'react'
import styles from '../styles/search.module.css'

const SearchBar = () => {
  return (
    <form className={styles['search-form']}>
      <div className={styles['search-bar']}>
        <input placeholder='Search by muscle group' className={styles['search-bar']}></input>
        </div>
        <div>
        <button className={styles['search-button']}>Search</button>
      </div>
    </form>


  )
}

export default SearchBar;
