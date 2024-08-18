import React from 'react';
import {Route,createBrowserRouter,createRoutesFromElements, RouterProvider} from "react-router-dom";
import {Box} from '@mui/material';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import './App.css';
import MainLayout from './layouts/MainLayout';
import ExerciseDetails from './pages/ExerciseDetails'
const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/exercise/:id" element={<ExerciseDetails/>} />
            </Route>
        )
    );
     return <RouterProvider router={router}/>;
  }

export default App