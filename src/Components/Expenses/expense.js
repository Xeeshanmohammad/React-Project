import React from 'react'
import Card from '../UI/card'
import "../Expenses/expense.css"
import ExpenseItem from './ExpenseItem'

const Expense=(props)=> {
  return (
    <Card className='expense'>
      {
        props.item.map(expenses=>(
          <ExpenseItem
          key = {expenses.key}
          date = {expenses.date}
          title = {expenses.title}
          amount = {expenses.amount}/>
        ))
      }
    </Card>
  )
}

export default Expense
