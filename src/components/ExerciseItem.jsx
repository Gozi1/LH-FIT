import React from 'react';
import styles from '../styles/Exercise.module.scss';
import { useState } from 'react';
import { BsPatchPlus, BsCaretDownFill } from 'react-icons/bs';
const CurrentExerciseItem = (props) => {
	//props
	const { id, exercise, onAdd, onRemove, edit, index, updateArray, sets, reps } = props;
	//destructure exercise
	const { name, muscle, equipment, instructions, weight } =
		exercise;

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
	return (
		<div className={styles['current-exercise-container']}>
			<div className={styles['exercise-positioner']}>
				<h3>{name}</h3>
				{onAdd && <BsPatchPlus onClick={() => onAdd(id)} />}
				{onRemove && (
					<h1
						className={styles['exercise-on-remove']}
						onClick={() => onRemove(id)}
					>
						-
					</h1>
				)}
			</div>

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
										updateArray(index, 'sets', 0);
									} else {
										updateArray(index, 'sets', e.target.value);
									}
								}}
							/>
							<p>Target Reps : </p>
							<input
								value={reps}
								onChange={(e) => {
									//prevents user from entering a negative number
									if (e.target.value === '-') {
										updateArray(index, 'reps', 0);
									} else {
										updateArray(index, 'reps', e.target.value);
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
												updateArray(index, 'weight', 0);
											} else {
												updateArray(index, 'weight', e.target.value);
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
				<BsCaretDownFill
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
		</div>
	);
};

export default CurrentExerciseItem;
