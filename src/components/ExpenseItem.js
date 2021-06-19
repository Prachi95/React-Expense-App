import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({data}) => {
    
    return (
        <div className="expense-item">
            <div>
                <ExpenseDate date={data.date}/>
            </div>
            <div className="expense-item__description">
                <h2>{data.title}</h2>
                <div className="expense-item__price">${data.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;