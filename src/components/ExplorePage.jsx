import { React, useState, useEffect } from "react";
import SearchItem from './SearchItem';
import axios from "axios";

const ExplorePage = () => {

  const [enrollments, setEnrollments] = useState();
  const [exercises, setExercises] = useState();
  
  useEffect(() => {
    const options = {
      method: "get",
      url: "http://localhost:8080/api/enrollments/1",
    };

    axios.request(options)
				.then((response) => {
					console.log(response);
					setEnrollments((prev) => ({ ...prev, exercisesId: response.data.exerciseId }))
          getExerciseById(enrollments);
				})
    .catch((error) => {
    console.log(error);
    });

  }, [])

  const getExerciseById = (enrollments) => {
    const options = {
      method: "get",
      url: "http://localhost:8080/api/exercises/",
      params: enrollments
    };

    axios.request(options)
      .then((response) => {console.log(response)
        // setExercsies((prev) => ({ ...prev, exercisesId: response.data.exercisesId }))      
      })
      .catch((error) => {
        console.log(error);
        });
  }

  return(
    <div>
    <div>
				{/* {exercises.map((exercise) => (
					<SearchItem key={exercise.name} name={exercise.id}/>
				))} */}
			</div>
    </div>
  );
}

export default ExplorePage;