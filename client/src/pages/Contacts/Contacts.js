import React from 'react'
import ContactList from '../../Component/ContactList/ContactList'
import { Button } from 'react-bootstrap'
import {  useNavigate } from 'react-router-dom'

const Contacts = () => {
  const navigate = useNavigate()
  return (
    <div>
      
     <div  style={{display:'flex', justifyContent:'center', marginTop:'60px'}}><Button onClick={()=> navigate('/addContact')}>Add new contact</Button></div> 
      <ContactList />
      
      </div>
  )
}

export default Contacts