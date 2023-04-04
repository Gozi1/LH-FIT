
import React from "react";
import SearchByMuscle from "../../hooks/SearchByMuscle";

export default function Data() {
  const params = SearchByMuscle()

  return (
    <div className="col">
      <h1>Here are some related exercises we have found: </h1>
      {(params.exercises).map((exercise, i) => <div key={i}>{exercise.name}</div>)}
      {(params.exercises).map((exercise, i) => <div key={i}>{exercise.muscle}</div>)}
    </div>
  );
}
