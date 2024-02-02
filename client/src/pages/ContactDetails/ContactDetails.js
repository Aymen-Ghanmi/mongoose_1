import React, { useEffect } from 'react'
import { Button, Card, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useMatch, useNavigate } from 'react-router-dom'
import { getOneContact } from '../../JS/Actions/ContactActions'

const ContactDetails = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const contact = useSelector((state) => state.contactReducer.oneContact)
    const load = useSelector((state) => state.contactReducer.load)
    const match = useMatch('contactDetails/:id')
    
    
    useEffect(()=> {
        dispatch(getOneContact(match.params.id))
       },[dispatch, match.params.id ])
   

       console.log(load)
    
    
    return (
    <div>
   {

   load ? <Spinner animation="border" variant="dark" />
        :
        <div style={{display:'flex',justifyContent:'center'}}>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg" />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>
          {contact.email}
        </Card.Text>
      <Button onClick={()=> navigate(-1)} variant="primary">Back</Button>
      </Card.Body>
    </Card>

   </div>
}



    </div> 
  )}


export default ContactDetails