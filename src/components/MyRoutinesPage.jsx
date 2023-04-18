import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import EnrollmentItem from './EnrollmentItem';

const MyRoutinesPage = () => {
  const [routines,setRoutines] = useState([]);
  const [enrollment,setEnrollment] = useState([]);
  const [loading, setLoading] = useState(true);


  const [cookies,setCookies] = useCookies(['user_id', 'routine_id']);
  const userId = cookies['user_id'];

  useEffect(() => {

    const fetchData = async () => {
      if (userId) {
        const options = {
          method: 'GET',
          url: 'http://localhost:8080/api/routines/user',
          params: { id: userId }
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

        console.log(mergedData);
        
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
                <div key={enrollment.id}>
                  <EnrollmentItem
                    exercise={enrollment.exercise}
                    sets={enrollment.sets}
                    reps={enrollment.reps}
                    weight={enrollment.weight}
                    enrollment={enrollment}
                    setEnrollment={setEnrollment}
                  />
                <br />
                </div>
              ))}
          </div>
        )).reverse()}

      </div>
  );
}

export default MyRoutinesPage;