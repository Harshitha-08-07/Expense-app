import React, { useContext } from 'react'
import { search } from '../Contextapi/Searchcontext'

export const Searchbar = () => {
    const {searchterm,setSearchterm}=useContext(search)
  return (
    
    <input type="text" placeholder='Search Expense' value={searchterm} onChange={(e)=>setSearchterm(e.target.value)} />
  )
}
