import React from 'react';
import styles from '../styles/Exercise.module.scss';
import { useState } from 'react';
import { BsPatchMinus, BsPatchPlus, BsCaretDown } from 'react-icons/bs';
const CurrentEnrollmentItem = (props) => {
	//props
	const { id, exercise, enrollment, setEnrollment } = props;
	//destructure exercise
	const { name, muscle, equipment, instructions } =
		exercise;
	const { sets, reps, weight} = enrollment;

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
		let newArray = enrollment;
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
      body: JSON.stringify(enrollment),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return response.json();
    }).catch((error) => {
      // Handle error
    });

	};

	return (
		<div className={styles['current-exercise-container']}>

			<div className={styles['exercise-positioner']}>
				<div>
					<p>Muscle Group : {muscle}</p>
					<p>Equipment Needed: {equipment}</p>
				</div>
				<div className={styles['set-reps-container']}>
					{!edit && (
						<>
							{weight > -1 && <p>Current Weight : {weight}</p>}
							<p>Total Sets : {sets}</p>
							<p>Target Reps : {reps}</p>
						</>
					)}
					{edit && (
						<>
							<p>Total Sets :</p>
							<input
								value={sets}
								onChange={(e) => {
									//prevents user from entering a negative number
									if (e.target.value === '-') {
										updateArray('sets', 0);
									} else {
										updateArray('sets', parseInt(e.target.value));
									}
								}}
							/>
							<p>Target Reps : </p>
							<input
								value={reps}
								onChange={(e) => {
									//prevents user from entering a negative number
									if (e.target.value === '-') {
										updateArray('reps', 0);
									} else {
										updateArray('reps', parseInt(e.target.value));
									}
								}}
							/>
							{weight > -1 && (
								<>
									<p>Current Weight : </p>
									<input
										value={weight}
										onChange={(e) => {
											//prevents user from entering a negative number
											if (e.target.value === '-') {
												updateArray('weight', 0);
											} else {
												updateArray('weight', parseInt(e.target.value));
											}
										}}
									/>
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
			<button onClick={handleClick}>Edit</button>
      <button onClick={handleSubmit}>Submit</button>
		</div>
	);
};

export default CurrentEnrollmentItem;
