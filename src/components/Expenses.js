import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

export default function Expenses({data}) {
    return (
        <div className="expenses">
            {
                data.map(item => {
                return <ExpenseItem key={item.id} data={item}/>
                })
            }
        </div>
    )
}
