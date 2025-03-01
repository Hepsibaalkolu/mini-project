const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const LoginModel = require('./modules/Login')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/test')

app.post('/logins', (req, res)=> {
    console.log(req.body)
    const {email, password} = req.body;
    LoginModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password===password) {
                res.json("Login Successfully")
            } else {
                res.json("The Password is incorrect")
            }
        } else {
            res.json("No record is existed")
        }
})
})

const port = 4400;
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})