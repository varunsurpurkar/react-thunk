import React from 'react'
import AddNewEmployee from './AddNewEmployee'
import {Table, Button} from 'react-bootstrap'

const employee = (props)=>{
    return (
        <React.Fragment>
        <h1 color="RED">EMPLOYEE DATA</h1>    
        <div>
            <Table striped bordered hover size="sm">
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
                                    <td><Button variant= 'warning' onClick = {
                                        ()=>{
                                            props.deleteExistingEmployee(employee)
                                        }
                                    } >Remove</Button></td>
                                   </tr>
                            
                        })
                    }
                </tbody>
             </Table>
        </div>
        <div>
            <AddNewEmployee insertNewEmployee = {props.insertNewEmployee}></AddNewEmployee>
        </div>
        </React.Fragment>
    )
}

export default employee