import React from "react";
import styles from '../styles/searchItems.module.scss'
import { BsPatchPlus, BsCaretDown } from 'react-icons/bs';


const SearchItem = (props) => {

  const { name, onAdd, exercise } = props;

  return (
      <div className={styles['current-search-container']}>
        <h4>{name}</h4>
        <div className={styles['add-button']}>
				<BsPatchPlus onClick={() => onAdd(exercise)} />
        </div>
      </div>
      
  )
}

export default SearchItem;