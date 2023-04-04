import { useState } from 'react'

const WorkOutGen = () => {
  const [params,setParams] = useState({
    difficulty: '',
    type:'',
    muscle: "biceps",
    numberOfExercises:6,
    exercises: []
  })
  const handleParams = (objectKey,Value) =>{
    setParams(prevState => ({
                ...prevState,
                [objectKey]: Value
            }));
  }

  console.log(params);

  return (
    params,
    handleParams
  )
}

export default WorkOutGen