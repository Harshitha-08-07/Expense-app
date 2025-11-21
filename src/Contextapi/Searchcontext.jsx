import React, { createContext, useState } from 'react'

export const search=createContext()

export const Searchcontext = ({children}) => {
    const [searchterm,setSearchterm]=useState("")

  return (
    <search.Provider value={{searchterm,setSearchterm}}>
        {children}
    </search.Provider>
  )
}
