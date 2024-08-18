import React, {useState,useEffect} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import { fetchData, exerciseOptions } from '../utils/fetchdata';
import HorizontalScrollBar from './HorizontalScrollBar';
const SearchExercises = ({setexercises, bodyPart, setbodyPart}) => {
    const [search,setSearch] = useState("");
    const [bodyParts, setbodyParts] = useState([]);
    useEffect(() => {
      const fetchExercisesData = async()=>{
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
        setbodyParts(['all',...bodyPartsData]);
      }
      fetchExercisesData();
    }, [])
    
    
    const handleSearch = async()=>{
        if(search){
            const exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/name/${search}`,exerciseOptions);
            console.log(exercisesData);
            const searchedExercises = exercisesData.filter(
                (e)=>e.name.toLowerCase().includes(search)
                ||e.target.toLowerCase().includes(search)
                ||e.equipment.toLowerCase().includes(search)
                ||e.bodyPart.toLowerCase().includes(search)
            );
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            setSearch('');
            console.log(searchedExercises);
            setexercises(searchedExercises);
        }
    }
  return (
    <Stack alignItems='center' mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}} mb="50px" textAlign='center'>
            Awesome Exercises You <br/> Should Know
        </Typography>
        <Box position="relative" mb="72px">
            <TextField
                sx={{
                    input:{fontWeight:'700',
                        border:'none',
                        borderRadius:'4px'
                    },
                    width:{lg:'800px', xs:'350px'},
                    backgroundColor:'#fff',
                    borderRadius:'40px',
                }}
                height="76px"
                value={search}
                onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
                placeholder='Search Exercises'
                type='text'
            />
            <Button className='search-btn' sx={{
                bgcolor: '#FF2625',
                color:'#fff',
                textTransform:'none',
                width:{lg:"175px", xs:"80px"},
                fontSize:{lg:'20px', xs: '14px'},
                height:'56px',
                position:'absolute',
                right:'0'
            }}
            onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
        <Box sx={{position:'relative', width:'100%', p:'20px'}}>    
            <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setbodyPart={setbodyPart} isBodyPart={true} />
        </Box>
    </Stack>
  )
}

export default SearchExercises