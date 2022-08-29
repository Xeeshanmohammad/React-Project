import "./expenseForm.css";
import React, {useState} from "react";


function ExpenseForm(props) {

  const [enterTitle, setEnterTitle] = useState('')
  const [enterAmount, setEnterAmount] = useState('')
  const [enterDate, setEnterDate] = useState('')

  const changeTitleHandler = (event)=>{
    setEnterTitle(event.target.value)
  }
  const changeAmountHandler = (event)=>{
    setEnterAmount(event.target.value)
  }
  const changeDateHandler = (event)=>{
   setEnterDate(event.target.value)
 }
const submitHandler =(event)=>{
   event.preventDefault()
   
   const expenses = {
     title:enterTitle,
     amount:enterAmount,
     date:new Date(enterDate)
    }
    props.onSaveExpenseData(expenses)
    
    setEnterTitle('')
    setEnterAmount('')
    setEnterDate('')
  }
 

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control"></div>
        <label>Title</label>
        <input type="text" value={enterTitle} onChange={changeTitleHandler}/>
        <div className="new-expense_control"></div>
        <label>Amout</label>
        <input type="number" value={enterAmount} min="0.01" step="0.01" onChange={changeAmountHandler} />
        <div className="new-expense_control"></div>
        <label>Date</label>
        <input type="date" value={enterDate} onChange={changeDateHandler}/>
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
