import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
    const [isEditing,setIsEditing] = useState(false);
    const toggleNewExpenseControlHandler = () => {
        setIsEditing((prevState) => {
            return !prevState;
        });
    };
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        console.log(expenseData);
    };
    return (
        <div className="new-expense">
            {!isEditing &&
                <button type='button' onClick={toggleNewExpenseControlHandler}>Add New Expense</button>
            }
            {isEditing &&
                <ExpenseForm onSaveExpensaData={saveExpenseDataHandler}
                             toggleNewExpenseControlHandler={toggleNewExpenseControlHandler}/>
            }
        </div>
    );
};

export default NewExpense;