import styles from '../styles/WorkOutGen.module.scss';
import Button from './Button';
import MuscleContainer from './MuscleContainer';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Error from './Error';
//props need (setCurrentParams)
// we choose a couple of params based on the user

const WorkOutGen = (props) => {
	const router = useRouter();
	const { params, setParams,setShowResults,show,showResults,reset } = props;
	const [error, setError] = useState(null);
	const handleSubmit = () => {
		if (params.difficulty ==''||params.type ==''||params.muscleGroup =='') {
			setError('Please select from all categories before submitting');
		} else {
			//change globalcurrent params to this params
			// redirect page to the show my exercises page
			// router.push('/my-workout');
			setShowResults(true)
		}
	};
	const handleParams = (objectKey, Value) => {
		setParams((prevState) => ({
			...prevState,
			[objectKey]: Value.toLowerCase(),
		}));
	};

	console.log(params);

	return (
		<div className={`${styles['work-out-gen']} ${show&&styles['shrink']}`}>
			<h1>Choose your difficulty</h1>
			<div className={styles['work-out-container-difficulty']}>
				<Button
					name='Beginner'
					keyName='difficulty'
					handleParams={handleParams}
					params={params}
				/>
				<Button
					name='Intermediate'
					keyName='difficulty'
					handleParams={handleParams}
					params={params}
				/>
				<Button
					name='Expert'
					keyName='difficulty'
					handleParams={handleParams}
					params={params}
				/>
			</div>
			<br />
			<h1>What is your training goal?</h1>
			<div className={styles['work-out-container-type']}>
				<Button
					name='Strength'
					keyName='type'
					handleParams={handleParams}
					params={params}
				/>
				<Button
					name='Endurance'
					keyName='type'
					handleParams={handleParams}
					params={params}
				/>
				<Button
					name='Hypertrophy'
					keyName='type'
					handleParams={handleParams}
					params={params}
				/>
			</div>
			{/*
      Stretch Feature maybe .... 
      <div className={styles['equipment-container']}></div> */}
			<br />
			<h1>Select the muscle you would like to work on </h1>
			<MuscleContainer handleParams={handleParams} />
			<br />
			<br />
			<div className={styles["work-out-buttons"]}>
			<button className={styles['submit']} onClick={handleSubmit}>
				Submit
			</button>
			{showResults && <button className={styles['reset']} onClick={reset}>
				Reset
			</button>}
			</div>
			<br />
			{error && <Error message={error} onCancel={setError} />}
		</div>
	);
};

export default WorkOutGen;
