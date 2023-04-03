import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FindByMuscle() {

  const [params,setParams] = useState({
    difficulty: '',
    type:'',
    muscle: 'biceps',
    numberOfExercises:6,
    query: 'muscle',
    exercises: []
  })

  useEffect(()=>{
    const options = {
      method: 'GET',
      url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
      params: {muscle: params.muscle},
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
    <div className="col">
      <h1>Here are some related exercises we have found: </h1>
      {(params.exercises).map((exercise, i) => <div key={i}>{exercise.name}</div>)}
  </div>
  )

}
