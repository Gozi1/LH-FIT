import { React, useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import ExerciseItem from './ExerciseItem';

const ExplorePage = () => {
  const [cookies,setCookies] = useCookies(['user']);

  const [routines,setRoutines] = useState();

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
        const routineResults = routineResponses.data
        
        const enrollmentPromises = routineResults.map((routine) => axios.get(`http://localhost:8080/api/enrollments/routine/${routine.id}`));
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
        <h3>{routines[0] && routines[0].name}</h3>
        {routines[0][0].map(enrollment => {
          return(
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
          )
        })}
        <h3>{routines[1] && routines[1].name}</h3>
          {routines[1][0].map(enrollment => {
            return(
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
            )
          })}
        <h3>{routines[2] && routines[2].name}</h3>
          {routines[2][0].map(enrollment => {
            return(
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
            )
          })}
        <h3>{routines[3] && routines[3].name}</h3>
          {routines[3][0].map(enrollment => {
              return(
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
              )
            })}
        <h3>{routines[4] && routines[4].name}</h3>
          {routines[4][0].map(enrollment => {
              return(
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
              )
            })}
			</div>
    </div>
  );
}

export default ExplorePage;