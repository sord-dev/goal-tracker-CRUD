import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import Tracker from './Pages/Tracker/Tracker'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Routes>
   <Route path='/' element={<App />} >
    <Route path='tracker' element={<Tracker />} />
    <Route path='about' element={<About />} />
   </Route>

   <Route path='*' element={
     <h1>nothin to see here!</h1>
   } />
    

   </Routes>
  </BrowserRouter>
)
