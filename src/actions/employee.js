import {ADD_EMPLOYEE, REMOVE_EMPLOYEE, UPDATE_EMPLOYEE} from '../constants'

export const addEmployee = (payload)=>{
    return {
        ADD_EMPLOYEE,
        payload
    }
}

export const removeEmployee = (payload)=>{
    return {
        REMOVE_EMPLOYEE,
        payload
    }
}

export const updateEmployee = (payload)=>{
    return {
        UPDATE_EMPLOYEE,
        payload
    }
}