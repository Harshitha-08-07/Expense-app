import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Expense } from './Page/Expense'
import { Addexpense } from './Page/Addexpense'
import { Item } from './Page/item'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Item/>} />
        <Route path='/expense' element={<Expense/>} />
        <Route path='/addexpense' element={<Addexpense/>}/>
      </Routes>
    </>
  )
}

export default App
