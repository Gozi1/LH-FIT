import React from 'react';
import styles from '../styles/Exercise.module.scss';
import styles2 from '../styles/routines.module.scss';
import { useState } from 'react';
import { BsCaretDown, BsLink45Deg } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Error from './Error';
import Success from './Success';
const CurrentEnrollmentItem = (props) => {
	const { push } = useRouter();
	//props
	const { id, exercise, enrollment } = props;
	//destructure exercise
	const [enrollments, setEnrollment] = useState({ ...enrollment });
	const { name, muscle, equipment, instructions } = exercise;
	const { sets, reps, weight } = enrollment;
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [edit, setEdit] = useState(false);

	//returns a number list of instructions
	const instructionHtml = instructions.split(',').map((sentence, index) => {
		return (
			<div key={index}>
				<p>
					{index + 1}. {sentence}
				</p>
				<br />
			</div>
		);
	});
	const [toggleInstruction, setToggleInstruction] = useState(false);

	//make a function that index the key value and the new value and updates the  state array
	const updateArray = (key, value) => {
		let newArray = { ...enrollments };
		newArray[key] = value;
		setEnrollment(newArray);
	};

	function handleClick() {
		setEdit(!edit);
	}

	const handleSubmit = async (event) => {
		// Make API call with project value
		fetch(`http://localhost:8080/api/enrollments/enrollment/${enrollment.id}`, {
			method: 'PUT',
			body: JSON.stringify(enrollments),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				setSuccess('Exercise Updated');
				return response.json();
			})
			.catch((error) => {
				// Handle error
				setError('Could not update exercise');
			});
	};

	return (
		<div className={styles['current-exercise-container']}>
			<h3>{name}</h3>
			<div className={styles['exercise-positioner']}>
				<div>
					<BsLink45Deg onClick={() => push(`/exercises/${exercise.id}`)} />
					<p>Muscle Group : {muscle}</p>
					<p>Equipment Needed: {equipment}</p>
				</div>
				<div className={styles['set-reps-container']}>
					{!edit && (
						<>
							{weight > -1 && <p>Current Weight : {enrollments.weight}</p>}
							<p>Total Sets : {enrollments.sets}</p>
							<p>Target Reps : {enrollments.reps}</p>
						</>
					)}
					{edit && (
						<>
							<div className={styles['edit-container']}>
								<p>Total Sets :</p>
								<input
									value={enrollments.sets}
									onChange={(e) => {
										//prevents user from entering a negative number
										if (e.target.value === '-' || e.target.value === '') {
											updateArray('sets', 0);
										} else {
											updateArray('sets', parseInt(e.target.value));
										}
									}}
								/>
							</div>
							<div className={styles['edit-container']}>
								<p>Target Reps : </p>
								<input
									value={enrollments.reps}
									onChange={(e) => {
										//prevents user from entering a negative number
										if (e.target.value === '-' || e.target.value === '') {
											updateArray('reps', 0);
										} else {
											updateArray('reps', parseInt(e.target.value));
										}
									}}
								/>
							</div>
							{weight > -1 && (
								<>
									<div className={styles['edit-container']}>
										<p>Current Weight : </p>
										<input
											value={enrollments.weight}
											onChange={(e) => {
												//prevents user from entering a negative number
												if (e.target.value === '-' || e.target.value === '') {
													updateArray('weight', 0);
												} else {
													updateArray('weight', parseInt(e.target.value));
												}
											}}
										/>
									</div>
								</>
							)}
						</>
					)}
				</div>
			</div>
			<div className={styles['instructions-container']}>
				<BsCaretDown
					className={toggleInstruction && styles['svg-flipper']}
					onClick={() => {
						setToggleInstruction(!toggleInstruction);
					}}
				/>
				<article
					className={
						toggleInstruction
							? styles['instruction-show']
							: styles['instruction-hide']
					}
				>
					{instructionHtml}
				</article>
			</div>
			<div className={styles2['button-container']}>
				<button className={styles2['edit']} onClick={handleClick}>
					Edit
				</button>
				<button className={styles2['submit']} onClick={handleSubmit}>
					Submit
				</button>
			</div>
			{error && <Error message={error} onCancel={setError} />}
			{success && <Success message={success} onCancel={setSuccess} />}
		</div>
	);
};

export default CurrentEnrollmentItem;
