import ExerciseData from "@/components/ExerciseData";

export default function Home(props) {
  return (
    <div>
      <h1>Fetch Data</h1>
      <ExerciseData data={props.data} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/fetch_data');
  const data = await res.json();
  return {
    props: { data }
  };
}
