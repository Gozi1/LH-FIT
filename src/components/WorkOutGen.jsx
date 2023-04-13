import styles from '../styles/WorkOutGen.module.scss';
import Button from './Button';
import MuscleContainer from './MuscleContainer';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Error from './Error';
import { Grid, Tooltip } from '@nextui-org/react';

//props need (setCurrentParams)
// we choose a couple of params based on the user

const WorkOutGen = (props) => {
	const router = useRouter();
	const { params, setParams, setShowResults } = props;
	const [error, setError] = useState(null);
	const handleSubmit = () => {
		if (
			params.difficulty == '' ||
			params.type == '' ||
			params.muscleGroup == ''
		) {
			setError('Please select from all categories before submitting');
		} else {
			//change globalcurrent params to this params
			setShowResults(true);
		}
	};
	const handleParams = (objectKey, Value) => {
		setParams((prevState) => ({
			...prevState,
			[objectKey]: Value.toLowerCase(),
		}));
	};

	return (
		<div className={styles['work-out-gen']}>
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
				<Tooltip
					content={
						'SHOW US SOME EFFORT! Strength training involves lower reps with higher weight. This form of training is used to make the muscle exert a maximal amount of force and ultimately allow the muscle to move more weight the next workout.'
					}
					color='invert'
					placement='top'
					rounded='false'
				>
					<Button
						name='Strength'
						keyName='type'
						handleParams={handleParams}
						params={params}
					/>
				</Tooltip>
				<Tooltip
					content={
						'NO PAIN NO GAIN! Endurance utilizes a very high rep range to build muscular stamina. This form of resistance training allows the muscle to last longer under stress. Best method to train for prolonged activities such as marathons.'
					}
					color='invert'
					className={styles['work-out-container-type']}
				>
					<Button
						name='Endurance'
						keyName='type'
						handleParams={handleParams}
						params={params}
					/>
				</Tooltip>
				<Tooltip
					content={
						'SLOW IT DOWN! Hypertrophy is a training method that  utlizes lighter weight with a longer eccentric (negative) to provide maximum muscle growth stimulation. Best option for building muscle mass.'
					}
					color='invert'
				>
					<Button
						name='Hypertrophy'
						keyName='type'
						handleParams={handleParams}
						params={params}
					/>
				</Tooltip>
			</div>
			{/*
      Stretch Feature maybe .... 
      <div className={styles['equipment-container']}></div> */}
			<br />
			<h1>Select the muscle you would like to work on </h1>
			<MuscleContainer handleParams={handleParams} />
			<br />
			<br />
			<div className={styles['work-out-buttons']}>
				<button className={styles['submit']} onClick={handleSubmit}>
					Submit
				</button>
				{/* {showResults && <button className={styles['reset']} onClick={reset}>
					Reset
				</button>} */}
			</div>
			<br />
			{error && <Error message={error} onCancel={setError} />}
		</div>
	);
};

export default WorkOutGen;
