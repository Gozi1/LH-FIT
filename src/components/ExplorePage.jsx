import { React, useState, useEffect } from "react";
import SearchItem from './SearchItem';
import axios from "axios";
import { useCookies } from 'react-cookie';
import getEnrollmentsForRoutine from '../helpers/selectors';

const ExplorePage = () => {
  const [cookies,setCookies] = useCookies(['user']);

  const [routines,setRoutines] = useState({});

  const userEmail = decodeURIComponent(cookies.user);


  useEffect(() => {

    async function findRoutines() {
      if (userEmail) {
        const options = {
          method: 'GET',
          url: 'http://localhost:8080/api/routines/user',
          params: { email: userEmail }
        }
        const routineResponses = await axios.request(options);
        const routines = routineResponses.data
        
        const enrollmentPromises = routines.map((routine) => axios.get(`http://localhost:8080/api/enrollments/routine/${routine.id}`));
        const enrollmentResponses = await Promise.all(enrollmentPromises);
        const enrollments = enrollmentResponses.map((response) => response.data);

        const mergedData = routines.map(routine => {
          return {
            ...routine,
            ...[enrollments[routine.id - 1]]
          }
        });

        console.log(mergedData);

        setRoutines(mergedData);
        console.log(routines);
      }
    }

    findRoutines();

	}, []);


  return(
    <div>
      <h1>Explore:</h1>
      <div>
        <h3>{routines[0].name}</h3>
          <h5>name: {routines[0][0][0].exercise.name}</h5>
          <h5>muscle: {routines[0][0][0].exercise.muscle}</h5>
          <h5>type: {routines[0][0][0].exercise.type}</h5>
          <h5>difficulty: {routines[0][0][0].exercise.difficulty}</h5>
          <h5>sets: {routines[0][0][0].sets}</h5>
          <h5>reps: {routines[0][0][0].reps}</h5>
          <h5>weight: {routines[0][0][0].weight}</h5>
        <h3>{routines[1].name}</h3>
        <h3>{routines[2].name}</h3>
        <h3>{routines[3].name}</h3>
        <h3>{routines[4].name}</h3>
			</div>
    </div>
  );
}

export default ExplorePage;