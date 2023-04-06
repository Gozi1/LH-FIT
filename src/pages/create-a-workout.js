import WorkOutGen from '../components/WorkOutGen';
import styles from '../styles/WorkOutGen.module.scss';
import SearchBar from '@/components/SearchBar';
import { useState } from 'react';
function HomePage() {
	// const params = WorkOutGen();
  // USEsTATE PARAM
  const [params,setParams] = useState({
    name:'',
    difficulty: '',
    type:'',
    muscleGroup: '',
    numberOfExercises:6
  })
	return (
		<div>
			{params.difficulty!=='' ? <SearchBar params ={params} setParams={setParams}/>:''}

			<WorkOutGen params ={params} setParams={setParams}/>
		</div>
	);
}

export default HomePage;
