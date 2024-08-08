import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Detail from './Components/Detail.jsx'
import Addproduct from './Components/Addproduct.jsx'
import Update from './Components/Update.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/addproduct' element={<Addproduct />} />
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='update/:id' element={<Update/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
