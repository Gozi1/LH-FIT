import Search from "../hooks/Search";
import CurrentExerciseItem from "@/components/ExerciseItem";
import CurrentExerciseList from "@/components/ExerciseList";
import NewExerciseItem from "@/components/NewExerciseItem";
import NewExerciseList from "@/components/NewExerciseList";
function HomePage() {


  const params = Search()
  return (
    <div>
      <p>Search bar</p>
      {(params.exercises).map((exercise, i) => 
      <CurrentExerciseItem 
      key={i} 
      name = {exercise.name}  
      sets = {3} 
      reps = {10} 
      muscleGroup = {exercise.muscle} 
      equipment = {exercise.equipment}
      instructions = {exercise.instructions}
      onAdd = {()=>console.log('hello')}/>)}
      <p>Works to add </p>
    </div>
  );
}

export default HomePage;
