import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import React from 'react'
import {Header} from './components/Header'
import { Home } from './components/Home'
import {Accion} from './components/Accion'
import {Aventura} from './components/Aventura'
import {Comedia} from './components/Comedia'
import {Drama} from './components/Drama'
import {Romance}  from './components/Romance'



function App() {                


  return (
 <BrowserRouter>
    <Header/>
    <Home/>
    <Drama/>
    <Comedia/>
    <Aventura/>
    <Accion/>
    <Romance/>
 </BrowserRouter>     
  )
}

export default App
