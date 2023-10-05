import React,{ useState } from 'react';

import "./ExpenseForm.css";

const ExpenseForm = () => {

    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredLocation, setEnteredLocation] = useState('');
    // const [entereddate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredLocation: '',
        enteredDate: '',
    });

    const titleChangeHandeler =(event)=>{
        // setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        setUserInput( (prevState)=> {
            return {
                ...prevState,
                enteredTitle: event.target.value,
            }
        });
    };
    const amountChangeHandeler = (event) =>{
        // setEnteredAmount(event.target.value);
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        });
    };
    const locationChangeHandeler = (event) =>{
        // setEnteredLocation(event.target.value);
        setUserInput({
            ...userInput,
            enteredLocation: event.target.value,
        });
    };
    const dateChangeHandeler = (event) =>{
        // setEnteredDate(event.target.value);
        setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        });
    };

  return (
    <form>
      <div className="new-expenses__controls">
        <div className="new-expense__control">
          <label>Title:</label>
          <input type="text" onChange={titleChangeHandeler} />
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input type="number" min={0.01} step={0.01} onChange={amountChangeHandeler} />
        </div>
        <div className="new-expense__control">
          <label>Location:</label>
          <input type="text" onChange={locationChangeHandeler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2021-01-01" max="2025-12-31" onChange={dateChangeHandeler} />
        </div>
      </div>
      <div>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
