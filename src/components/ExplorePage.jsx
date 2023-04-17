import { useState, useEffect } from "react";
import axios from "axios";
import ExerciseItem from './ExerciseItem';

const ExplorePage = () => {

  const [routines,setRoutines] = useState([]);
  const [loading, setLoading] = useState(true);

  const adminEmail = "sample1@sample.com";


  useEffect(() => {

    const fetchData = async () => {
      if (adminEmail) {
        const options = {
          method: 'GET',
          url: 'http://localhost:8080/api/routines/user',
          params: { email: adminEmail }
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
        
      }
    }

    fetchData();
    setLoading(false);

	}, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return(
    <div>
      <h1>Explore:</h1>

        {routines.map((routine) => (
          <div key={routine.name}>
            <h2>Routine Name: {routine.name}</h2>
            <h4>Created at: {routine.createdAt}</h4>
            <h4>Created by: {routine.user.name}</h4>
              {routine.enrollments[0].map((enrollment) => (
                <div key={enrollment.exercise.name}>
                  <ExerciseItem
                    exercise={enrollment.exercise}
                    sets={enrollment.sets}
                    reps={enrollment.reps}
                    weights={enrollment.weights}
                  />
                <br />
                </div>   
              ))}
          </div>
        ))}

      </div>
  );
}

export default ExplorePage;