// src/App.jsx

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './landing/components/Landing'
import Play from './play/components/Play'
import './App.css'

function App() {
  return (

    <>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Landing/>} />
        <Route path = '/play' element = {<Play/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )

}

export default App
