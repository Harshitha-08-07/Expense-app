import axios from 'axios'
import React, { use, useContext, useEffect, useState } from 'react'
import { fetch } from '../Contextapi/Fetchcontext'

export const Itemcart = () => {
 const {expense,setExpense,datafilter }=useContext(fetch)


  return (
    <div>{
      datafilter.map((item)=>(
        <div key={item.id} style={{border:"1px solid black",margin:"10px",padding:"10px"}}>
          <h3>{item.id} </h3>
          <h3>{item.title}</h3>  
          <h3>{item.amount}</h3>
          <h3>{item.date}</h3> 
      </div>
      ))
    }</div>
  )
}
