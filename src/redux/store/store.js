import { combineReducers, createStore } from "redux";
import expenseReducer from "../reducers/expenses";




//combined reducer 
const reducer = combineReducers( {
    expenses: expenseReducer
})


const initialState = {}


// store is created here the reducer which is passes is the combined reducer 
const store = createStore(reducer , initialState); 

export default store ; 