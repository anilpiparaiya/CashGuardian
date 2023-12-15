import React from 'react';
import moment from 'moment';
import './style/Card.css';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../redux/actions/expenses';





const Card = (props) => {

    const dispatch = useDispatch();

    const { expense, id } = props;

    const time = moment(expense.createdAT).fromNow();

    console.log(expense);



    const handleDelete = () => {
        dispatch(deleteExpense(expense));

       
    }

    return (
        <div  key={id} className='card' style={{ borderRight: `6px solid black` }}>
            <div className='card-info'>
                <label className='card-title'>{expense.title}</label>
                <label className='card-time'>{time}</label>
            </div>
            <div className='card-right'>
                <div>
                    <label className='card-amount'>Rs. {expense.amount}</label>
                </div>
                <div className='delete-icon' onClick={handleDelete}>
                    <i className='fi-rr-trash'></i>
                </div>
            </div>
        </div>
    );
}

export default Card;