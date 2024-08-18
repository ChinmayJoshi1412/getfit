import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import React from 'react'
import { Box } from "@mui/material"
import Detail from "../Components/Detail"
import ExerciseVideos from "../Components/ExerciseVideos"
import SimilarExercises from "../Components/SimilarExercises"
import { exerciseOptions, fetchData, YTOptions } from "../utils/fetchdata"
const ExerciseDetails = () => {

    const [exerciseDetail, setexerciseDetail] = useState({});
    const {id} = useParams();
    const [exerciseVideos, setexerciseVideos] = useState({});
    const [targetmuscleExercises, settargetmuscleExercises] = useState([])
    useEffect(()=>{
        const fetchExercisesData = async()=>{
            const exerciseDbURL = 'https://exercisedb.p.rapidapi.com/exercises';
            const YTsearchurl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbURL}/exercise/${id}`,exerciseOptions);
            
            setexerciseDetail(exerciseDetailData);

            const exerciseVideoData = await fetchData(`${YTsearchurl}/search?query=${exerciseDetailData.name}`,YTOptions);
            setexerciseVideos(exerciseVideoData.contents);

            const targetMuscleExercisesData = await fetchData(`${exerciseDbURL}/target/${exerciseDetailData.target}`,exerciseOptions);
            settargetmuscleExercises(targetMuscleExercisesData);
        }
        fetchExercisesData();
    },[id])
  return (
    <Box>
        <Detail exerciseDetail={exerciseDetail} />
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
        <SimilarExercises targetmuscleExercises={targetmuscleExercises}/>
    </Box>
  )
}

export default ExerciseDetails