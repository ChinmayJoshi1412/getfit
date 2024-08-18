import React from 'react'
import {Box,Stack,Typography} from '@mui/material';
const ExerciseVideos = ({exerciseVideos, name}) => {

    if(!exerciseVideos.length)return 'Loading';
  return (
    <Box sx={{marginTop:{lg:'200px', xs:'20px'}}} p="20px">
        <Typography variant="h5" mb="33px" fontWeight={600} >
            Watch <span style={{textTransform:'capitalize'}}>{name}</span> exercise videos
        </Typography>
        <Stack justifyContent={'flex-start'} flexWrap={'wrap'} alignItems={'center'}
        sx={{
            flexDirection:{lg:'row'},
            gap:{lg:'110px',xs:'50px'},
            alignItems:{xs:'center'}
        }}
        >
            {exerciseVideos?.slice(0,3).map((item,index)=>(
                <a key={index} className='exercise-vidoe' href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target='_blank'
                rel="noreferrer"
                style={{textDecoration:'none',textWrap:'pretty'}}>
                    <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{width:'400px'}}/>
                    <Box width={"400px"} height={"200px"}>
                        <Typography variant="h6" color="#000" sx={{textDecoration:'none'}}>{item.video.title}</Typography>
                        <Typography variant="h7" color="#000" sx={{textDecoration:'none'}}>{item.video.channelName}</Typography>
                    </Box>
                </a>
            ))}
        </Stack>
    </Box>
  )
}

export default ExerciseVideos