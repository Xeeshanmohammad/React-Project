import React from 'react'
import ExpenseItem from './Components/ExpenseItem'


function App() {
   let expenses = [
    {
      _id:'e1',
      title:'My School Fee',
      amount:"200",
      date:new Date(2022, 8, 24)

      
    },
    {
      _id:'e2',
      title:'My Subjct',
      amount:"300",
      date:new Date(2022, 8, 25)

      
    },
    {
      _id:'e1',
      title:'Literature Book',
      amount:"400",
      date:new Date(2022, 8, 26)

      
    },
    {
      _id:'e1',
      title:'My Bag',
      amount:"500",
      date:new Date(2022, 8, 27)

      
    }
   ]
  return (
    <div>
        <h1>Lets get Start</h1>

      <ExpenseItem
      date = {expenses[0].date}
      title = {expenses[0].title}
      amount = {expenses[0].amount}>
      </ExpenseItem>
      <ExpenseItem
      date = {expenses[1].date}
      title = {expenses[1].title}
      amount = {expenses[1].amount}>
      </ExpenseItem>
      <ExpenseItem
      date = {expenses[2].date}
      title = {expenses[2].title}
      amount = {expenses[2].amount}>
      </ExpenseItem>
      <ExpenseItem 
       date = {expenses[3].date}
       title = {expenses[3].title}
       amount = {expenses[3].amount}></ExpenseItem>
    </div>
  )
}

export default App
