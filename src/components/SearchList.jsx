import React from 'react'
import SearchItem from './SearchItem'
import styles from '../styles/search.module.scss';
const SearchList = (props) => {
  const { exercises, onAdd} = props
  return (
    <div className={styles['search-list']}>
					{exercises.map((exercise) => (
						<SearchItem
							key={exercise.name}
							exercise={exercise}
							onAdd={onAdd}
						/>
					))}
			</div>
  )
}

export default SearchList