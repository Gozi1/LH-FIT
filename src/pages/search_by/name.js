
import React from "react";
import SearchByName from "@/hooks/SearchByName";

export default function Data() {
  const params = SearchByName()

  return (
    <div className="col">
      <h1>Here are some related exercises we have found: </h1>
      {(params.exercises).map((exercise, i) => <div key={i}>{exercise.name}</div>)}
    </div>
  );
}
