import { useState, useEffect } from "react";
import axios from "axios";

export default function SearchByName() {

  const [params,setParams] = useState({
    name: 'push',
    difficulty: "beginner",
    type:"strongman",
    muscle: "biceps",
    numberOfExercises:6,
    exercises: []
  })

  useEffect(()=>{
    const options = {
      method: 'GET',
      url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
      params: {name: params.name},
      headers: {
        'X-RapidAPI-Key': '87b5ef7ecemsh3744aa57e06b7f7p1b5fffjsn04eef49b9efc',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      setParams(prev=>({...prev, exercises: response.data}));
    }).catch(function (error) {
      console.error(error);
    });
  },[]);

  return (
    params
  )

}
