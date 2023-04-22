import React from 'react'
import { useRouter } from 'next/router'
import useFetchApi from '@/hooks/useFetchApi'
import { useState } from 'react'
import SearchBar from '@/components/SearchBar'
import Loading from '@/components/Loading'
import YouTube from "react-youtube";
import styles from '../../styles/ExercisePage.module.scss';
const exercises =() => {
  const {push,query} = useRouter()
  const [exercise,setExercises] = useState(null)
  const { id } = query
  const opts = {
    height: "720",
    width: "1280",
    playerVars: {
      autoplay: 1,
    },
  };
  function onReady(event) {
    event.target.pauseVideo();
  }
  const getYoutubeId =(str)=>{
    console.log(str)
    return str.substring(str.indexOf("=") + 1)
  }
  const { mode } = useFetchApi(
		id,
		{},
		`http://localhost:8080/api/exercises/search-by/${id}`,
		'GET',
		(data)=>{setExercises(data)
    console.log(data)},
		()=>{console.log('hello')}
	);
   
  return (
    <div className={styles['exercise-page']}> 
      {mode==='LOADING' && <Loading message={'Fetching'}/>}
      {mode === 'SHOW' &&<>
      <SearchBar/>
      <h1 className={styles['name']}>{exercise.name}</h1>
      <h2 className={styles['muscle']}>{exercise.muscle}</h2>
      <h3 className={styles['difficulty']}>{exercise.difficulty}</h3>
      {<YouTube videoId={getYoutubeId(exercise.youtueblink)}
      onReady={onReady}
            opts={opts}  />}
      <h3 className={styles['instruction-heading']}>Instructions</h3>
      <div className={styles['instruction-container']}>
      {exercise.instructions.split(',').map((sentence, index) => {
		return (
			<div key={index}>
				<p>
					{index + 1}. {sentence}
				</p>
				<br />
			</div>
		)
	})}
  </div>
      </>
      }
      {mode ==='ERROR' && <h1>Page Not Found</h1>}
    </div>
  )
}

export default exercises