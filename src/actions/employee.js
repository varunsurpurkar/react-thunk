import {ADD_EMPLOYEE, 
        REMOVE_EMPLOYEE, 
        UPDATE_EMPLOYEE} from '../constants'

export const addEmployee = (payload)=>{
    return {
        type:ADD_EMPLOYEE,
        payload
    }
}

export const removeEmployee = (payload)=>{
    return {
        type:REMOVE_EMPLOYEE,
        payload
    }
}

export const updateEmployee = (payload)=>{
    return {
        Type:UPDATE_EMPLOYEE,
        payload
    }
}

export const findEmployee = (state,payload)=>{
     return state.employees.find(employee=>{
        return  employee.id === payload.id &&
         employee.firstName ===payload.firstName &&
         employee.lastName === payload.lastName
     })
}

//simple thunk
export const addOnlyNewEmployee = (employee)=>{
   return (dispatch, getState)=>{
        let existingEmployee = findEmployee(getState(),employee)
        if(existingEmployee === undefined){
            dispatch(addEmployee(employee))
        }else{
            console.log("Employee Already Exisits")
            Promise.resolve()
        }
   }
}