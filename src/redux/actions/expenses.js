import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../action-types/expenses"



const addExpense = (data) => {
    console.log(data);
    return {
        type: ADD_EXPENSE,
        data
    }
}


const deleteExpense = (data) => {
    return {
        type: DELETE_EXPENSE,
        data
    }
}

const searchExpense = (query) => {
    return {
        type : SEARCH_EXPENSE, 
        query
    }
}

export { addExpense, deleteExpense , searchExpense};