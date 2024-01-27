const express = require('express')

const app = express()

app.use(express.json())

require('dotenv').config()

const PORT = process.env.PORT || process.env.PORT2

app.listen(PORT, (err) =>{
err? console.log(err)
: console.log(`server is running at http://127.0.0.1:${PORT}`)
})


const connect = require('./config/connectDB')
connect()

app.use('/api/contacts' , require('./Routes/contact'))
 
