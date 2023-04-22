import { useState, useEffect } from "react";
import axios from "axios";
import ExploreRoutineSlide from './ExploreRoutineSlide';
const ExplorePage = () => {

  const [routines, setRoutines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [routinesIndex, setroutinesIndex] = useState({});
  const adminID = 1;


  useEffect(() => {

    const fetchData = async () => {
      if (adminID) {
        const options = {
          method: 'GET',
          url: 'http://localhost:8080/api/routines/user',
          params: { id: adminID }
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
        setroutinesIndex({ current: 0, next: 1, prev: mergedData.length - 1 });
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
    
        <ExploreRoutineSlide routines={routines}
				routinesIndex={routinesIndex}
				setroutinesIndex={setroutinesIndex} />

      </div>
  );
}

export default ExplorePage;