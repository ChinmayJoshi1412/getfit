import React from 'react'
import { useState, useEffect } from 'react'
import { Pagination,Box,Stack,Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchdata'
import ExerciseCard from './ExerciseCard'

const Exercises = ({setexercises,exercises, bodypart}) => {
  const [currentPage, setcurrentPage] = useState(1);
  const exercisePerPage = 6;
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise)
  const paginate = (e,value)=>{
    setcurrentPage(value);
    window.scrollTo({top:'200', behavior:'smooth'})
  }

  useEffect(()=>{
    const fetchExercisesData = async()=>{
      let exercisesData = [];
      if(bodypart==='all'){
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`,exerciseOptions)
      }else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`,exerciseOptions)
      }
      setexercises(exercisesData);
    }
    fetchExercisesData();

  },[bodypart])

  return (
    <Box id="exercises" sx={{mt:{lg:'110px'}}} mt='50px' p='20px'>
      <Typography variant="h4" mb="46px" fontWeight={700}>
        Showing Results
      </Typography>
      <Stack direction="row" sx={{gap:{lg:"110px",xs:"50px"}}} flexWrap={'wrap'} justifyContent={'center'}>
        {currentExercises.map((exercise,index)=>(
          <ExerciseCard key={index} exercise = {exercise}/>
        ))}
      </Stack>
      <Stack mt="100px" alignItems={'center'}>
        {exercises.length > 6 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count = {Math.ceil(exercises.length/9)}
            page={currentPage}
            onChange={paginate}
            size="large"
            />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises