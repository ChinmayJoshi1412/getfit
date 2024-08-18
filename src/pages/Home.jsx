import React from 'react'
import { Box } from '@mui/material'
import { useState } from 'react'
import HeroBanner from '../Components/HeroBanner'
import SearchExercises from '../Components/SearchExercises'
import Exercises from '../Components/Exercises'
const Home = () => {
  const [bodypart, setbodyPart] = useState('all')
  const [exercises, setexercises] = useState([]);
  console.log(bodypart);
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setexercises={setexercises} bodyPart={bodypart} setbodyPart={setbodyPart} />
      <Exercises setexercises={setexercises} exercises={exercises} bodypart={bodypart}/>
    </Box>
  )
}

export default Home