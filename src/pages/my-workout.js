import Search from "../hooks/Search";
function HomePage() {


  const params = Search()
  return (
    <div>
      <p>Search bar</p>
      {(params.exercises).map((exercise, i) => <div key={i}>{exercise.name}</div>)}
      <p>Works to add </p>
    </div>
  );
}

export default HomePage;
