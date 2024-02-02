import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addContact } from '../../JS/Actions/ContactActions'
import { useNavigate } from 'react-router-dom'


const AddContact = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [newContact, setNewContact]= useState({})

    const handleChange = (e)=>{
        setNewContact({...newContact, [e.target.name] : e.target.value})
    }


    const add = () => { 
    dispatch(addContact(newContact))
    navigate('/contacts')
    }
    
  return (
    <div>

    <h1>Add new Contact</h1> 
    <Container>  
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control name='name' onChange={(e)=>handleChange(e)} type="name" placeholder="Enter name" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control name='email' onChange={(e)=>handleChange(e)}  type="email" placeholder="enter your email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control name='phone' onChange={(e)=>handleChange(e)}  type="number" placeholder="enter your Phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
      </Form.Group> 

      <Button onClick={()=> add()} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container> 
    </div>
  )
}

export default AddContact