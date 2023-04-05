import { useState, useEffect } from "react";
import axios from "axios";
// helper function that uses all params at the same time
export default function Search() {
//This function should take in params that the search function returns 
  const params = {
    difficulty: "beginner",
    type:'',
    muscle: "triceps",
    offset:0,
    name:''
  }
 // not sure if exercises should be a use state or just a regular object  or just an object
const [exercises,setExercises] = useState({
  exercises:[]
})

  useEffect(()=>{
    // options for the api 
    const options = {
      method: 'GET',
      url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
      params: {name:params.name,muscle:params.muscle,type:'',offset:params.offset,difficulty:params.difficulty},
      headers: {
        'X-RapidAPI-Key': '87b5ef7ecemsh3744aa57e06b7f7p1b5fffjsn04eef49b9efc',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
    };
    //request to api
    axios.request(options).then(function (response) {
      console.log(response.data);
      setExercises(prev=>({...prev, exercises: response.data}));
    }).catch(function (error) {
      console.error(error);
    });
  },[]);

  return (
    exercises
  )

}
