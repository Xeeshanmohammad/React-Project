// import React, {useState} from "react";
import React from "react";
import ExpenseData from "../Expenses/ExpenseData";
import Card from "../UI/card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

//   const  [ newTitle, setNewTitle] = useState('')

//   const changeHandler = (event)=>{
//     setNewTitle(event.target.value)
//   }

//   const [title, setTitle] = useState(props.title)
  
// const clickHandler = ()=>{
//   setTitle(newTitle);  
// }
  return (
    <Card className="expense-item">
      <div>
      <ExpenseData date= {new Date(props.date)}/>
      </div>
      <div className="expense-item_description">
        <h2> {props.title}</h2>
        <div className="expense-item_price"> ${props.amount}</div>
      </div>
      {/* <input type="text" value={newTitle} onChange = {changeHandler}/>
      <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
