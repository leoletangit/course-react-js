import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from "./ExpenseDate";
import {useState} from "react";

const ExpenseItem = (props) => {
    let [title, setTitle] = useState(props.title);
    return  (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>

        </Card>
    );
}

export default ExpenseItem;