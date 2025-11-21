import React, { useContext } from 'react'
import { fetch } from '../Contextapi/Fetchcontext'

export const List = () => {
  const {expense,setExpense,datafilter }=useContext(fetch)
  return (
    <div style={{ padding: "20px" }}>
      <h2>Expenses Table</h2>

      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "50%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th>Title</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {datafilter.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.title}</td>
              <td>{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
