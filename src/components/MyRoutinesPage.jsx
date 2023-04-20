import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import EnrollmentItem from './EnrollmentItem';
import styles from '../styles/routines.module.scss';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import RoutineSlide from './RoutineSlide';
const MyRoutinesPage = () => {
	const [routines, setRoutines] = useState([]);
	const [enrollment, setEnrollment] = useState([]);
	const [loading, setLoading] = useState(true);
	const [routinesIndex, setroutinesIndex] = useState({});

	const [cookies, setCookies] = useCookies(['user_id', 'routine_id']);
	const userId = cookies['user_id'];

	useEffect(() => {
		const fetchData = async () => {
			if (userId) {
				const options = {
					method: 'GET',
					url: 'http://localhost:8080/api/routines/user',
					params: { id: userId },
				};

				const routineResponses = await axios.request(options);
				const routineResults = routineResponses.data;

				const enrollmentPromises = routineResults.map((routine) =>
					axios.get(
						`http://localhost:8080/api/enrollments/routine/${routine.id}`
					)
				);
				const enrollmentResponses = await Promise.all(enrollmentPromises);
				const enrollments = enrollmentResponses.map(
					(response) => response.data
				);

				let routinePlaceHolder = -1;
				const mergedData = routineResults.map((routine) => {
					routinePlaceHolder += 1;
					return {
						...routine,
						enrollments: [enrollments[routinePlaceHolder]],
					};
				});

				console.log(mergedData);

				setRoutines(mergedData);
				setroutinesIndex({ current: 0, next: 1, prev: mergedData.length - 1 });
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<RoutineSlide
				routines={routines}
				routinesIndex={routinesIndex}
				setEnrollment={setEnrollment}
				setroutinesIndex={setroutinesIndex}
			/>
		</div>
	);
};

export default MyRoutinesPage;
