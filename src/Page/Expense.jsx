import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Expensetotal } from '../Component/Expensetotal'
import { List } from '../Component/List'

export const Expense = () => {
  return (
    <>
    <Navbar/>
    <List/>
    <Expensetotal/>
    </>
  )
}
