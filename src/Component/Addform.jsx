import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Addform = () => {
  const [title,setTitle]=useState("")
  const [amount,setAmount]=useState("")
  const [date,setDate]=useState("")


  const handleSubmit= async (e)=>{
    e.preventDefault()
      const newdata={
        id:Math.random().toString(),
        title,
        amount: +amount,
        date
      }
      try{
        await axios.post("http://localhost:3000/expenses",newdata)
        alert("Expense Added Successfully")
      }catch(err){
        console.log(err)
      }
  setTitle("")
  setAmount("")
  setDate("")
}
  return (
    <div>
      <h1>Add Expense</h1>
      <form onSubmit= {handleSubmit} style ={{display:"flex",flexDirection:"column",width:"300px",gap:"10px"}}>
        <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type="number" min={0.1} step={0.1} placeholder='Amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        <input type="date" placeholder='Date' value={date} onChange={(e)=>setDate(e.target.value)}/>
         <button type='submit'>Add Expense</button>
        </form>
       
    </div>
  )

}
