import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
    const expenseDate = new Date(2022,9,16);
    const expenseTitle = 'Car Insurance'
    const expenseAmount = 294.67;

    const expenses = [
        {date: new Date(2022,9,16), title: 'Car Insurance', amount: 293.12},
        {date: new Date(2022,9,12), title: 'React Course', amount: 12.12},
        {date: new Date(2022,9,11), title: 'Grocery', amount: 122.12}
    ];

    const addExpenseHandler = (expense) => {
        console.log(expense);
    };
  return (
    <div>
        <NewExpense onAddExpense = {addExpenseHandler} />
        <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
