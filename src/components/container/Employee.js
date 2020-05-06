import { connect } from 'react-redux'
import { addEmployee, removeEmployee, updateEmployee } from '../../actions/employee'
import Employee from '../ui/Employee'

const mapStateToProps = (state)=>{
    return {
        employees: state.employees
    }
   
}

const mapDispatchToProps = (dispatch)=>{
   return {
       addEmployee: (newEmployee)=>dispatch(addEmployee),
       removeEmployee: (employee)=>dispatch(removeEmployee),
       updateEmployee: (employee)=>dispatch(updateEmployee)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee)