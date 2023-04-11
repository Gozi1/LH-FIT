import React from "react";
import styles from '../styles/search.module.css';

const SearchItem = (props) => {

  const { searchResult, onAdd } = props;

  return (
      <li className={styles['search-item']}>
        <p> {searchResult.name}</p>
        <p> {searchResult.difficulty}</p>
        <p> {searchResult.muscle}</p>
        
        <button onClick={onAdd}>
        +
        </button>
      </li>
      
  )
}

export default SearchItem;