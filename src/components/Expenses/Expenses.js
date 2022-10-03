import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import {useState} from "react";

const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        console.log("Expenses.js")
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    };
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseItem title={props.expenses[0].title} date={props.expenses[0].date} amount={props.expenses[0].amount}/>
                <ExpenseItem title={props.expenses[1].title} date={props.expenses[1].date} amount={props.expenses[1].amount}/>
                <ExpenseItem title={props.expenses[2].title} date={props.expenses[2].date} amount={props.expenses[2].amount}/>
            </Card>
        </div>
    );
}

export default Expenses;