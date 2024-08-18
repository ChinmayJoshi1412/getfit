import React from 'react'
import {Box,Stack,Typography} from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({targetmuscleExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}} p='20px'>
        <Typography variant='h5' fontWeight={600} mb={4}>Exercises that target the same muscle group</Typography>
        <Stack direction={'row'} sx={{p:'2',positions:'relative'}}>
            {targetmuscleExercises.length?<HorizontalScrollBar data={targetmuscleExercises}/>:<Loader/>}
        </Stack>
    </Box>
  )
}

export default SimilarExercises