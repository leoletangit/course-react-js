import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES  = [
    {id: Math.random().toString(), date: new Date(2022,9,16), title: 'Car Insurance', amount: 293.12},
    {id: Math.random().toString(), date: new Date(2022,9,12), title: 'React Course', amount: 12.12},
    {id: Math.random().toString(), date: new Date(2021,9,11), title: 'Grocery', amount: 122.12}
];
const App = () => {
    const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
    const [filteredExpenses,setFilteredExpenses] = useState(null);

    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    };

  return (
    <div>
        <NewExpense onAddExpense = {addExpenseHandler} />
        <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
