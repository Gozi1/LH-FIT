
import React from "react";
import SearchByType from "@/hooks/SearchByType";

export default function Data() {
  const params = SearchByType()

  return (
    <div className="col">
      <h1>Here are some related exercises we have found: </h1>
      {(params.exercises).map((exercise, i) => <div key={i}>{exercise.name}</div>)}
      {(params.exercises).map((exercise, i) => <div key={i}>{exercise.type}</div>)}
    </div>
  );
}
