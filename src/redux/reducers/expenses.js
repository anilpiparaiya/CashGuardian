import { updateLocale } from "moment";
import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../action-types/expenses";
import { searchExpense } from "../actions/expenses";



const initialList =()=> {
    const list = localStorage.getItem('expense-list')
    let expenses = [];
    if(list){ 
        expenses = JSON.parse(list); 
    }

    return expenses;
}

const initialState = {
    expenseList: initialList(),
    query: ""

}

// store -> defines -> ui -> triggers -> action -> sent to -> reducer -> updates -> store -> contains -> state



const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE: {
            localStorage.setItem('expense-list', JSON.stringify([...state.expenseList, action.data]))
            return {
                ...state,
                expenseList: [...state.expenseList, action.data]
            }
        }

        case DELETE_EXPENSE: {
            const {data} = action;
            const {id} = data; 
            const {expenseList} = state; 
            const updatedList  = expenseList.filter( (item) => item.id!==id); 

            localStorage.setItem('expense-list', JSON.stringify(updatedList))


            return {
                ...state,
                expenseList: updatedList,
            }
        }

        case SEARCH_EXPENSE: {
            const {query} = action;
            return {
                ...state, 
                query
            }

        }

        default:
            return state;
    }
};


export default expenseReducer; 