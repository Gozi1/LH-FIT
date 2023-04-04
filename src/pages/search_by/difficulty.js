
import React from "react";
import SearchByDifficulty from "@/hooks/SearchByDifficulty";

export default function Data() {
  const params = SearchByDifficulty()

  return (
    <div className="col">
      <h1>Here are some related exercises we have found: </h1>
      {(params.exercises).map((exercise, i) => <div key={i}>{exercise.name}</div>)}
      {(params.exercises).map((exercise, i) => <div key={i}>{exercise.difficulty}</div>)}
    </div>
  );
}
