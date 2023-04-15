import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import ExerciseItem from './ExerciseItem';

const MyRoutinesPage = () => {
  const [routines,setRoutines] = useState([]);
  const [loading, setLoading] = useState(true);

  const [cookies,setCookies] = useCookies(['user']);
  const userEmail = decodeURIComponent(cookies.user);

  useEffect(() => {

    const fetchData = async () => {
      if (userEmail) {
        const options = {
          method: 'GET',
          url: 'http://localhost:8080/api/routines/user',
          params: { email: userEmail }
        }

        const routineResponses = await axios.request(options);
        const routineResults = routineResponses.data
        
        const enrollmentPromises = routineResults.map((routine) => axios.get(`http://localhost:8080/api/enrollments/routine/${routine.id}`));
        const enrollmentResponses = await Promise.all(enrollmentPromises);
        const enrollments = enrollmentResponses.map((response) => response.data);

        let routinePlaceHolder = -1;
        const mergedData = routineResults.map(routine => {
          routinePlaceHolder += 1;
          return {
            ...routine,
            enrollments : [enrollments[routinePlaceHolder]]
          }
        });
        
        setRoutines(mergedData);
        setLoading(false);
        
      }
    }

    fetchData();

	}, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return(
    <div>
      <h1>Your Routine:</h1>

        {routines.map((routine) => (
          <div key={routine.name}>
            <h2>Routine Name: {routine.name}</h2>
            <h4>Created at: {routine.createdAt}</h4>
            <h4>Created by: {routine.user.name}</h4>
              {routine.enrollments[0].map((enrollment) => (
                <div key={enrollment.exercise.name}>
                  <ExerciseItem
                    name={enrollment.exercise.name}
                    sets={enrollment.sets}
                    reps={enrollment.reps}
                    muscleGroup={enrollment.exercise.muscle}
                    equipment={enrollment.exercise.equipment}
                    instructions={enrollment.exercise.instructions}
                  />
                <br />
                </div>   
              ))}
          </div>
        ))}

      </div>
  );
}

export default MyRoutinesPage;