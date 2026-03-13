import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import ProjectList from './pages/ProjectList'
import DPRform from './pages/DPRForm'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/projects' element={<ProjectList />} />
        <Route path='/dpr/:id' element={<DPRform />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App