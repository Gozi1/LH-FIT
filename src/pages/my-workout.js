import Search from "../hooks/Search";
import ExerciseList from "@/components/ExerciseList";

function HomePage() {


  const params = Search()
  return (
    <div>
      <p>Search bar</p>
      <ExerciseList exercises = {params.exercises} onRemove = {()=>console.log('hello')}/>
      
      {/* another list to show search results will the onAdd prop */}
      <p>Works to add </p>
    </div>
  );
}

export default HomePage;
