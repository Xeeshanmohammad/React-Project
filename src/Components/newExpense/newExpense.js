import './newExpense.css'
import React from 'react'
import ExpenseForm from './expenseForm'

function NewExpense(props) {
      const expenseSaveData = (onDataExpenses)=>{
        const expensesData = {
          ...onDataExpenses,
              _id:Math.random().toString()
        }
        props.onAddExpenses(expensesData)
      }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData = {expenseSaveData} />
    </div>
  )
}

export default NewExpense
