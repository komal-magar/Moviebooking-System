import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import MoviesDetails from './pages/MoviesDetails'
import BookingSystem from './pages/MyBookings'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Movies from './pages/Movies'



export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path = "/" element ={<Home/>}/>
      <Route path = "/movies" element ={<Movies/>}/>
      <Route path = "/moviesDetails/:id" element ={<MoviesDetails/>}/>
      <Route path = "/bookingSystem" element ={<BookingSystem/>}/>
      <Route path = "/login" element ={<Login/>}/>
      <Route path = "/register" element ={<Register/>}/>
      </Routes>
    </>
  )
}