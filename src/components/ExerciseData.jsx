export default function ExerciseData(props) {
  return (
    <div>
      <h2>Exercise Data:</h2>
      <ul>
        {props.data.map(item => (
          <li key={item.id}>
            <h1>{item.name}</h1>
            <h3>{item.type}</h3>
            <h3>{item.muscle}</h3>
            <h3>{item.equipment}</h3>
            <h3>{item.difficulty}</h3>
            <h3>{item.instructions}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
