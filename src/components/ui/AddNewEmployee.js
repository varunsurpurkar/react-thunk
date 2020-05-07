import React from 'react'
import {useState} from 'react'


const AddNewEmployee = (props)=>{
   
    const [firstName, setFirstName] = useState({})
    const [id,setId] = useState({})   
    const [lastName,setLastName] = useState({})   
    const [salary,setSalary] = useState({})   
    
    return (
        <div>
           <label>First Name</label> <input type = "text" name ="firstName" onChange= {(event)=> {
                setFirstName(event.target.value)
            } } value={firstName}></input>
            <label>Last Name</label> <input type = "text" name="lastName" onChange= {(event)=> {
                setLastName(event.target.value)
            } } value={lastName}></input>
            <label>Identifer</label> <input type = "text" name="id" onChange= {(event)=> {
                setId(event.target.value)
            } } value={id}></input>
            <label>Salary</label> <input type = "text" name="salary" onChange= {(event)=> {
                setSalary(event.target.value)
            } } value={salary}></input>
            <button onClick = {()=>props.insertNewEmployee({
                id:id,
                firstName:firstName,
                lastName:lastName,
                salary:salary
            })}>Add Employee</button>
        </div>

    )
}

export default AddNewEmployee