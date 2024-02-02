import { FAIL_CONTACT, LOAD_CONTACT, ONE_CONTACT, SUCCESS_CONTACT } from "../ActionTypes/ActionTypes";



const initialState = {
     load : false,
     success: null,
     fail: null,
     listContacts: [],
     oneContact : {}
}

const contactReducer = (state=initialState, {type,payload}) =>{
    switch (type) { 
      
        case LOAD_CONTACT:
            return {...state, load: true}
        
        case SUCCESS_CONTACT:
            return {...state, load: false, listContacts: payload }
        
        case FAIL_CONTACT:
            return {...state, load: false, fail: payload}
        

        case ONE_CONTACT:
            return {...state, load: false,  oneContact: payload}
        
        default:
            return state;
    }
}


export default contactReducer