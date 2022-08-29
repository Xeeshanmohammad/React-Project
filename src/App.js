import React, {useState, useEffect} from 'react'
import Expense from './Components/Expenses/expense'
import NewExpense from './Components/newExpense/newExpense'


let Dummy_Expenses =[
  {
    _id:"e1",
    title:"My School Fee",
    amount:200,
    date:new Date(2022, 8, 24)
  },
  {
    _id:"e2",
    title:"My Subjct",
    amount:300,
    date:new Date(2022, 8, 25)
  },
  {
    _id:"e3",
    title:"Literature Book",
    amount:400,
    date:new Date(2022, 8, 26)
  },
  {
    _id:"e4",
    title:"My Bag",
    amount:500,
    date:new Date(2022, 8, 23)
  }
]

const App=() => {
  const [expenses, setExpenses] = useState(Dummy_Expenses)

  function fetchData(){
    fetch('URL').then(response=>{
      return response.json()}).then(data=>{
   setExpenses(data)
      })
  }

 useEffect(()=>{
  fetchData()
 },[])
      
   const addExpenseHandler = (addExpense)=>{
        fetch('url',{
          method:'POST',
          body:JSON.stringify(addExpense),
          headers:{
            'content-type':'application/json'
          }
        }).then(response=>{
          fetchData()
        })
   }
  return (
    <div>
        <NewExpense onAddExpenses = {addExpenseHandler}/>
        <Expense item = {expenses}/>
    </div>
  )
}

export default App
