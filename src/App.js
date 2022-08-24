import React from 'react'
import Expense from './Components/expense'


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
        <Expense item = {expenses}/>
    </div>
  )
}

export default App
