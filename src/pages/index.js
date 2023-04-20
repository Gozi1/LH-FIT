import useGetUser from '../hooks/useGetUser';
export default function Home(props) {
  const { user, loading } = useGetUser();
  return (
    <>
      <h1>Welcome {user} </h1>

    </>
  )
}
