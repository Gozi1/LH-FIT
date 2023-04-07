import useGetUser from '../hooks/useGetUser';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


export default function Home(props) {
  const { user, loading } = useGetUser()
  const router = useRouter()

  useEffect(() => {
    if (!(user || loading)) {
      router.push('/login')
    } else {
      router.push('/create-a-workout')
    }
  }, [user, loading])
  return (
    <>
      <h1>Welcome {user} </h1>

    </>
  )
}
