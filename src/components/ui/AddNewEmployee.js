import React from 'react'
import {useState} from 'react'
import {Button} from 'react-bootstrap'
import{InputGroup} from 'react-bootstrap'
import {FormControl,Container,Row, Col,label} from 'react-bootstrap'


const AddNewEmployee = (props)=>{
   
    const [firstName, setFirstName] = useState({})
    const [id,setId] = useState({})   
    const [lastName,setLastName] = useState({})   
    const [salary,setSalary] = useState({})   
    
    return (
        <Container fluid>
            <Row>
                <Col>
                <h1>Add Employee</h1>
                </Col>
            </Row>
            <Row >
              <Col xs={3}>
              <label htmlFor="firstName">First Name</label>
                    <InputGroup className="mb-3">
                        <FormControl id="firstName" placeholder="First Name" 
                         aria-label="First Name" onChange = { (event)=>{
                            setFirstName(event.target.value)
                        } }/>
                    </InputGroup>
                </Col>
            </Row>
            <Row >
              <Col xs={3}>
              <label htmlFor="lastName">Last Name</label>
                    <InputGroup className="mb-3">
                        <FormControl id="lastName" placeholder="Last Name"  aria-label="Last Name"
                        onChange = { (event)=>{
                            setLastName(event.target.value)
                        } } />
                    </InputGroup>
                </Col>
            </Row>
            <Row >
              <Col xs={3}>
              <label htmlFor="iden">Identifier</label>
                    <InputGroup className="mb-3">
                        <FormControl id="iden" placeholder="Identifier"  aria-label="Identifier" 
                        onChange = { (event)=>{
                            setId(event.target.value)
                        } }/>
                    </InputGroup>
                </Col>
            </Row>
            <Row >
              <Col xs={3}>
              <label htmlFor="salary">Salary $</label>
                    <InputGroup className="mb-3">
                        <FormControl id="salary" placeholder="Salary"  aria-label="Salary" 
                        onChange = { (event)=>{
                            setSalary(event.target.value)
                        } }/>
                    </InputGroup>
                </Col>
            </Row>
            <Button onClick = {()=>props.insertNewEmployee({
                id:id,
                firstName:firstName,
                lastName:lastName,
                salary:salary
            })}>Add Employee</Button>
        </Container>

    )
}

export default AddNewEmployee