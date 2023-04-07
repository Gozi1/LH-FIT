import React from "react";
import styles from "../styles/search.module.scss";
import { BsPatchPlus, BsCaretDown } from 'react-icons/bs';


const SearchItem = (props) => {

  const { name, onAdd, exercise } = props;

  return (
      <div className={styles['current-search-container']} onClick={() => onAdd(exercise)}>
        <h4>{name}</h4>
        <div className={styles['add-button']}>
				<h1  >+</h1>
        </div>
      </div>
      
  )
}

export default SearchItem;