import React from 'react'

const employee = (props)=>{
    console.log(props)
    return (
        <div>For Employee...
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
                                    <td><button>Remove</button></td>
                                   </tr>
                            
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                        <button>ADD Employee</button>
                        </td>
                    </tr>
                  
                </tfoot>
            </table>
        </div>
    )
}

export default employee