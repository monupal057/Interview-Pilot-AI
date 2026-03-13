// import React from 'react'
// import Login from '@/Pages/Login'
// import MainPage from '@/Pages/MainPage'
// import Register from '@/Pages/Register'
// import Session from '@/Pages/Session'
// import SessionDetails from '@/Pages/SessionDetails'
// import { Route, Routes } from 'react-router-dom'
import MainPage from '@/Pages/MainPage'
import Login from '@/Pages/Login'
import Register from '@/Pages/Register.'
import Session from '@/Pages/Session'


const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/session' element={<Session/>}/>
    </Routes>
  //  <Routes>
  //   <Route path='/' element={<MainPage/>}/>
  //   <Route path='/login' element={<Login/>}/>
  //    <Route path='/register' element={<Register/>}/>
  //     <Route path='/session' element={<Session/>}/>
  //      <Route path='/session/:id' element={<SessionDetails/>}/>
  //  </Routes>
  )
}
 export default MainRoutes
