import React, { useEffect } from 'react';
import './style/ExpenseList.css'
import Card from './Card';
import { useSelector } from 'react-redux';

//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ExpenseList = () => {

    const expenses = useSelector(state => state.expenses);
    const { expenseList: list , query } = expenses;

    const filteredList = list.filter(item => item.title.includes(query));

    console.log(query);



    useEffect(() => {
        const notify = () => toast('item deleted successfully');
        notify();
    }, [list]);



    return (
        <div className='expense-list'>
            {filteredList.length ? filteredList.map((expense) => <Card id={expense.id} expense={expense} />) :

                <div className='empty-state'> <label> oh your list is empty</label> </div>}
            <ToastContainer position="bottom-left" autoClose='1000' />

        </div>
    );
}

export default ExpenseList;