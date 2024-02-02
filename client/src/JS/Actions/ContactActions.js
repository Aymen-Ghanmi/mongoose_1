import { FAIL_CONTACT, LOAD_CONTACT, ONE_CONTACT, SUCCESS_CONTACT } from "../ActionTypes/ActionTypes"
import axios from 'axios'

export const getContacts = () => async (dispatch) =>{
    dispatch({type: LOAD_CONTACT})
    try {
        const contacts = await axios.get('/api/contacts/getcontacts')
        dispatch({type: SUCCESS_CONTACT, payload: contacts.data})
        
    } catch (error) {
        dispatch({type: FAIL_CONTACT, payload: error })
    }
}


export const getOneContact = (id) => async (dispatch) =>{
    dispatch({type: LOAD_CONTACT})
    try {
        const contact = await axios.get(`/api/contacts/getContactById/${id}`)
        dispatch({type: ONE_CONTACT, payload: contact.data})
        
    } catch (error) {
        dispatch({type: FAIL_CONTACT, payload: error })
    }
}
 

export const addContact = (newContact) => async (dispatch) =>{
  
    try {
        const result = await axios.post('/api/contacts/add_contact', newContact)
        dispatch({type: SUCCESS_CONTACT, payload: result.data})
        dispatch(getContacts())
    } catch (error) {
        dispatch({type: FAIL_CONTACT, payload: error })
    }
}