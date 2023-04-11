import React from "react";
import styles from '../styles/search.module.css';

const SearchItem = (props) => {

  const { exercise, onAdd } = props;

  return (
      <li className={styles['search-item']}>
        <p> {exercise.name}</p>
        <p> {exercise.difficulty}</p>
        <p> {exercise.muscle}</p>
        
        <button onClick={onAdd}>
        +
        </button>
      </li>
      
  )
}

export default SearchItem;