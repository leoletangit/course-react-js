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
    const filteredExpenses = props.expenses.filter(expense => {
       return filteredYear === 'ALL' || new Date(expense.date).getFullYear().toString()  === filteredYear;
    });
    let expensesContent = <p>No expenses found</p>;
    if (filteredExpenses.length > 0) {
        expensesContent =filteredExpenses.map(expense =>
            <ExpenseItem key={expense.id}
                         title={expense.title}
                         date={expense.date}
                         amount={expense.amount}/>

        );
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {expensesContent}
            </Card>
        </div>
    );
}

export default Expenses;