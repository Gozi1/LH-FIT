import React from 'react';
import EnrollmentItem from './EnrollmentItem';
import styles from '../styles/routines.module.scss';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import { useState } from 'react';

const RoutineSlide = (props) => {
	const { routines, routinesIndex, setroutinesIndex } = props;
	const [edit, setEdit] = useState(null);
	
	//Change the index of the current routine
	const nextSlide = () => {
		setroutinesIndex((prev) => ({
			...routinesIndex,
			current: prev.current === routines.length - 1 ? 0 : prev.current + 1,
			next: prev.next === routines.length - 1 ? 0 : prev.next + 1,
			prev: prev.prev === routines.length - 1 ? 0 : prev.prev + 1,
		}));
	};

	const prevSlide = () => {
		setroutinesIndex((prev) => ({
			...routinesIndex,
			current: prev.current === 0 ? routines.length - 1 : prev.current - 1,
			next: prev.next === 0 ? routines.length - 1 : prev.next - 1,
			prev: prev.prev === 0 ? routines.length - 1 : prev.prev - 1,
		}));
	};
	const classNames = (index) => {
		if (index === routinesIndex.current) {
			return styles['active-slide'];
		}
		if (index === routinesIndex.next) {
			return styles['next-slide'];
		}
		if (index === routinesIndex.prev) {
			return styles['prev-slide'];
		}
		return styles['hidden-slide'];
	};
	return (
		<div>
			<h1>My Routines</h1>
			{!edit && (
				<BsFillCaretLeftFill
					className={styles['left-arrow']}
					onClick={prevSlide}
				/>
			)}
			{!edit && (
				<BsFillCaretRightFill
					className={styles['right-arrow']}
					onClick={nextSlide}
				/>
			)}
			{routines
				.map((routine, index) => (
					<div key={routine.name} className={classNames(index)}>
						{(routinesIndex.current === index || edit === index + 1) && (
							<h2
								
							>
								{routine.name}
							</h2>
						)}
						{edit === index + 1 &&
            <>
						
            <h4 className={styles['see-more']} onClick={() => {
                      edit ? setEdit(null) : setEdit(index + 1);
                    }}>- Less Detail</h4>
							{routine.enrollments[0].map((enrollment) => (
								<div key={enrollment.id}>
									<EnrollmentItem
										exercise={enrollment.exercise}
										sets={enrollment.sets}
										reps={enrollment.reps}
										weight={enrollment.weight}
										enrollment={enrollment}
									/>
									<br />
								</div>
							))}
              </>}
						{!edit && (
							<table className={styles['routine-grid']}>
							<tr>
								<th className={styles['exercise-part']}>Exercise Name</th>
								<th className={styles['weight-part']}>Weight</th>
								<th className={styles['reps-part']}>Reps</th>
								<th className={styles['sets-part']}>Sets</th>
							</tr>
							{routine.enrollments[0].map((enrollment, i) => {
								if (i === routine.enrollments[0].length - 1) {
									return (
										<tr
											className={styles['see-more']}
											onClick={() => {
												edit ? setEdit(null) : setEdit(index + 1);
											}}
										>
											see more ...
										</tr>
									);
								}
								if (i < 3) {
									return (
										<tr>
											<td className={styles['exercise-part']}>
												{enrollment.exercise.name}
											</td>
											<td className={styles['weight-part']}>
												{enrollment.weight < 1 ? 0 : enrollment.weight}
											</td>
											<td className={styles['reps-part']}>
												{enrollment.reps}
											</td>
											<td className={styles['sets-part']}>
												{enrollment.sets}
											</td>
										</tr>
									);
								}
							})}
						</table>
						)}
					</div>
				))
				.reverse()}
		</div>
	);
};

export default RoutineSlide;
