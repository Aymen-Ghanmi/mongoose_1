

const express = require('express')
const { test, addContact, getContacts, getById, deleteContact, editContact } = require('../Controllers/contact')

const router = express.Router()

router.get('/test', test)

router.post('/add_contact', addContact)

router.get('/getcontacts', getContacts)

router.get('/getContactById/:_id', getById)

router.delete('/deleteContact/:_id', deleteContact)

router.put('/editContact/:_id',editContact)
module.exports = router 

