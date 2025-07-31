import React from 'react'
import  {Routes } from 'react-router-dom'
import { Route } from 'react-router-dom';
import Home from './Home'
import Login from './login';
export default function AppRoutes({isLogedInOrNot,setIsLogedInOrNot}) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login setIsLogedInOrNot={setIsLogedInOrNot}/>}></Route>
        <Route path="/home" element={isLogedInOrNot ?<Home/>:<Login setIsLogedInOrNot={setIsLogedInOrNot}/>}></Route>
      </Routes>
    </div>
  )
}
