import React from "react";
import styles from '../styles/Exercise.module.scss'

const SearchItem = (props) => {

  const { name, onAdd } = props;

  return (
      <div>
        {name}
        <button onClick={onAdd}>
        ADD+
        </button>
      </div>
      
  )
}

export default SearchItem;