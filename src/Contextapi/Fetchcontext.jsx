import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { search } from './Searchcontext'

export const fetch=createContext()

export const Fetchcontext = ({children}) => {
    const [expense,setExpense]=useState([])
    const {searchterm}=useContext(search)

  useEffect(()=>{
   const fetchData= async()=>{
    try{
      const res= await axios.get("http://localhost:3000/expenses")
      setExpense(res.data)
    }
    catch(err){
      console.log(err)
    }
    }
    fetchData()
  })
  

  const datafilter=expense.filter((item)=>
    {
        return (item.title.toLowerCase().includes(searchterm.toLowerCase()))
  })


  
  return (
    <fetch.Provider value={{expense,setExpense,datafilter}}>
        {children}
    </fetch.Provider>
  )
}
