import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        title: '',
        amount:'',
        date:''
    });


    const titleChangeHandler = (event) => {
        setUserInput((prevState) =>{
            return {
                ...prevState,
                title: event.target.value,
            };
        });
    };
    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                amount: event.target.value
            };
        });
    };
    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                date: event.target.value
            };
        });
    };

    const addHandler = (event) =>  {
        event.preventDefault();
        const data = {
            title: userInput.title,
            amount: +userInput.amount,
            date: new Date(userInput.date)
        };
        props.onSaveExpensaData(data);
        setUserInput({
            title: '',
            amount: 0,
            date:''
        });
        props.toggleNewExpenseControlHandler();
        console.log(data);
    };
    return (
        <form onSubmit={addHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={userInput.title}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}
                           value={userInput.amount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}
                           value={userInput.date}/>
                </div>

            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.toggleNewExpenseControlHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
    </form>
    );
};

export default ExpenseForm;