import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './components/login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter future={{ v7_startTransition: true }}>
    <Routes>
      <Route path='/' element={<App />} ></Route>
      <Route path='/login' element={<LoginPage/>} ></Route>
    </Routes>
  </HashRouter>,
)
