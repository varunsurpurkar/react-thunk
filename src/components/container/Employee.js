import { connect } from 'react-redux'
import { addOnlyNewEmployee, removeEmployee, updateEmployee } from '../../actions/employee'
import Employee from '../ui/Employee'

const mapStateToProps = (state)=>{
    return {
        employees: state.employees
    }
   
}

const mapDispatchToProps = (dispatch)=>{
    console.log(addOnlyNewEmployee)
   return {
       insertNewEmployee: (newEmployee)=>dispatch(addOnlyNewEmployee(newEmployee)),
       deleteExistingEmployee: (employee)=>dispatch(removeEmployee(employee)),
       modifyExistingEmployee: (employee)=>dispatch(updateEmployee(employee))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee)