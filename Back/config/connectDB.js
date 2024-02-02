const mongoose = require('mongoose');

// fiunction connect to DB
const connect = async () =>{
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log('connected to data successfuly')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connect