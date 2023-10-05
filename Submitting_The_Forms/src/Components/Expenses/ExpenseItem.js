import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [expense, setExpense] = useState(props.amount);

  const clickHandler = () => {
    setExpense(100);
    console.log(expense);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={expense}
        location={props.location}
        title={props.title}
      />
      <button onClick={clickHandler}>Change Expense</button>
    </Card>
  );
};

export default ExpenseItem;
