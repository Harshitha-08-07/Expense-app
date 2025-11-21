import React from 'react'
import { Link } from 'react-router-dom'
import { Searchbar } from './Searchbar'


export const Navbar = () => {
  return (
    <nav style={{display:"flex",gap:"20px",padding:"10px",borderBottom:"2px solid black"}}>
      <Searchbar/>
      <Link to="/">Item</Link>
      <Link to="/expense">Expense</Link>
      <Link to="/addexpense">Add Expense</Link>

    </nav>
  )
}
