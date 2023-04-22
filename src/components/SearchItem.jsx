import React from "react";
import styles from "../styles/search.module.scss";
import { BsPatchPlus, BsCaretDown } from 'react-icons/bs';
import { useRouter } from 'next/router';

const SearchItem = (props) => {

  const { onAdd, exercise } = props;
  const {name,id,muscle}=exercise
  const {push} = useRouter();
  return (
      <div className={styles['current-search-container']} onClick={() =>onAdd? onAdd(exercise): push(`/exercises/${id}`)}>
        <h4>{name}</h4>
        <h5>{muscle}</h5>
       {onAdd &&<div className={styles['add-button']}>
				<h1>+</h1>
        </div>}

      </div>
      
  )
}

export default SearchItem;