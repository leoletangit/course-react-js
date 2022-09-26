import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
    return (
        <div className="expenses">
            <ExpenseItem title={props.expenses[0].title} date={props.expenses[0].date} amount={props.expenses[0].amount}/>
            <ExpenseItem title={props.expenses[1].title} date={props.expenses[1].date} amount={props.expenses[1].amount}/>
            <ExpenseItem title={props.expenses[2].title} date={props.expenses[2].date} amount={props.expenses[2].amount}/>
        </div>
    );
}

export default Expenses;