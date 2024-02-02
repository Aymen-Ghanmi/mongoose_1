import React from 'react'
import {Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const ContactCard = ({contact}) => {
  const navigate = useNavigate()
  return (
    <div >
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg" />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>
          {contact.email}
        </Card.Text>
      <Button onClick={()=> navigate(`/contactDetails/${contact._id}`)} variant="primary">Profile</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ContactCard