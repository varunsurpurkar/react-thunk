import {ADD_EMPLOYEE, REMOVE_EMPLOYEE, UPDATE_EMPLOYEE} from '../constants'

let initialState = [
    {
        id:"1234",
        firstName:"Varun",
        lastName: "Surpurkar",
        salary:"135K"
      }
]
export const employees = (state=initialState,action)=>{
    let actionType = action.actionType
    let payload = action.payload
    switch(actionType){
        case ADD_EMPLOYEE: return addEmployeeR(state,payload)
        case REMOVE_EMPLOYEE: return removeEmployeeR(state,payload)
        case UPDATE_EMPLOYEE: return updateEmployeeR(state,payload)
        default: return state;
    }
}


const addEmployeeR = (state,payload)=>{
    return [...state,payload]
}

const removeEmployeeR = (state,payload)=>{
    return state.filter(employee=>{
        return employee.id!== payload.id
    })
}

const updateEmployeeR=(state,payload)=>{
    addEmployeeR(removeEmployeeR(state,payload),payload)
}