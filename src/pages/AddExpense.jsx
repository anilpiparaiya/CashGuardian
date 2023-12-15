import React from 'react';
import './style/AddExpense.css'
import Top from '../components/Top';
import AddForm from '../components/AddForm';

const AddExpense = () => {
    return (
        <div className='add-expense'>
            <Top/>
            <AddForm/> 
        </div>
    );
}

export default AddExpense;