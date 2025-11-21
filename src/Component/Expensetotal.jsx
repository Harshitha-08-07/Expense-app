import React, { useContext } from 'react'
import { fetch } from '../Contextapi/Fetchcontext'

export const Expensetotal = () => {
  const {datafilter}=useContext(fetch)



  const total=datafilter.reduce((acc,curr)=>acc+curr.amount,0)

  return (
   <h1>Count Total : {total} </h1>
  )
}
