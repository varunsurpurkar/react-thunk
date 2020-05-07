import React from 'react'
import AddNewEmployee from './AddNewEmployee'


const employee = (props)=>{
    console.log(props)
    return (
        <React.Fragment>
        <h1 color="RED">EMPLOYEE DATA</h1>    
        <div>
            <table border="1">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Salary</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.employees.map(employee=>{
                            return <tr>
                                    <td>{employee.id}</td>  
                                    <td>{employee.firstName}</td>  
                                    <td>{employee.lastName}</td>  
                                    <td>{employee.salary}</td>  
                                    <td><button onClick = {
                                        ()=>{
                                            props.deleteExistingEmployee(employee)
                                        }
                                    } >Remove</button></td>
                                   </tr>
                            
                        })
                    }
                </tbody>
             </table>
        </div>
        <div>
            <AddNewEmployee insertNewEmployee = {props.insertNewEmployee}></AddNewEmployee>
        </div>
        </React.Fragment>
    )
}

export default employee