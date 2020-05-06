import {createStore, combineReducers, applyMiddleware} from 'redux'
import {employees} from './reducers/employee'
import thunk  from 'redux-thunk'


const reducer = combineReducers({ employees} )

export const store = createStore(reducer, applyMiddleware(thunk))