import React from 'react'
import Home from './pages/Home'
import LikedPage from './pages/LikedPage'
import MostBuyed from './pages/MostBuyed'

import {Routes,Route} from 'react-router-dom'
import DetailPage from './pages/DetailPage'
import Login from './pages/Login'
import RegisterPage from './pages/RegisterPage'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/liked' element={<LikedPage />} />
        <Route path='/mostbuyed' element={<MostBuyed/>} />
        <Route path='/MostBuyed/:BuildingId' element={<DetailPage />} />
      </Routes>
    </div>
  )
}

export default App
