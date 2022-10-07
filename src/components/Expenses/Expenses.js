import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        console.log("Expenses.js")
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.expenses.filter(expense => {
       return filteredYear === 'ALL' || new Date(expense.date).getFullYear().toString()  === filteredYear;
    });
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses}/>    q
                <ExpensesList expensesList={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;